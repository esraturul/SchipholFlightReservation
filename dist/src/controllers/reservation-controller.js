"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllReservations = exports.getUserReservations = exports.reserveFlight = void 0;
const reservationQueries = __importStar(require("../database/queries/reservation-queries"));
const flightQueries = __importStar(require("../database/queries/flight-queries"));
const caching_middleware_1 = require("../middlewares/caching-middleware");
const flight_controller_1 = require("./flight-controller");
/**
 * Reserves a flight seat for a user
 * @param req
 * @param res
 */
const reserveFlight = async (req, res) => {
    try {
        const { flight_id, seat, user_id } = req.body;
        const flightDetails = await (0, flight_controller_1.getFlight)(flight_id);
        // Check if the flight exists
        if (!flightDetails) {
            return res.status(404).json({ error: "Flight not found" });
        }
        // Check if a flight direction is correct
        const flightDirection = flightDetails.flightDirection;
        if (flightDirection !== "D") {
            return res.status(400).json({ error: "Flight direction is not correct" });
        }
        // Check if the seat is available
        const seatAlreadyReserved = caching_middleware_1.cache.has(`seat:${seat}`);
        if (seatAlreadyReserved) {
            return res.status(409).json({ error: "Seat is already reserved" });
        }
        // Check if flight already exists in the database
        const foundFlight = await flightQueries.getFlightDetailsBySchipholId(flightDetails.id);
        let flightID = foundFlight?.id;
        if (flightID) {
            // Check if a reservation for a user already exists for the flight
            const reservations = await reservationQueries.getUserReservationsForFlight(parseInt(user_id), parseInt(flightID));
            if (reservations.length > 0) {
                return res
                    .status(400)
                    .json({
                    error: "Reservation already exists for the user on this flight",
                });
            }
        }
        // Create a new flight if it doesn't exist
        if (!foundFlight) {
            const createdFlight = await flightQueries.createFlight({
                flight_name: flightDetails.flightName,
                departure_date: flightDetails.scheduleDate,
                departure_time: flightDetails.scheduleTime,
                destination_airport: flightDetails?.route.destinations.join(","),
                airline_prefix: flightDetails.prefixICAO,
                schiphol_id: flightDetails.id,
            });
            flightID = createdFlight.id;
        }
        // Create a reservation
        await reservationQueries.createReservation(flightID, seat, user_id, "CONFIRMED");
        // Mark the seat as unavailable
        caching_middleware_1.cache.set(`seat:${seat}`, user_id);
        return res.json({ message: "Reservation successful" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.reserveFlight = reserveFlight;
/**
 * Gets all reservations for a user
 * @param req
 * @param res
 */
const getUserReservations = async (req, res) => {
    try {
        const { user_id } = req.params;
        const reservations = await reservationQueries.getUserReservations(parseInt(user_id));
        return res.json(reservations);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getUserReservations = getUserReservations;
/**
 * Gets all reservations regardless of user
 * @param req
 * @param res
 */
const getAllReservations = async (req, res) => {
    try {
        const reservations = await reservationQueries.getAllReservations();
        return res.json(reservations);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllReservations = getAllReservations;
