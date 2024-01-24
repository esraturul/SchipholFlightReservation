"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlightDetailsById = exports.getFlightDetailsBySchipholId = exports.createFlight = void 0;
const db_config_1 = __importDefault(require("../db-config"));
/**
 * This function creates a flight in the database
 * @param flight
 */
const createFlight = async (flight) => {
    return await db_config_1.default.one("INSERT INTO flight (flight_name, departure_date, departure_time, destination_airport, airline_prefix, schiphol_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;", [
        flight.flight_name,
        flight.departure_date,
        flight.departure_time,
        flight.destination_airport,
        flight.airline_prefix,
        flight.schiphol_id,
    ]);
};
exports.createFlight = createFlight;
/**
 * This function gets flight details by schiphol id
 * @param id
 */
const getFlightDetailsBySchipholId = async (id) => {
    return await db_config_1.default.oneOrNone("SELECT * FROM flight WHERE schiphol_id = $1", [
        id,
    ]);
};
exports.getFlightDetailsBySchipholId = getFlightDetailsBySchipholId;
/**
 * This function gets flight details by id
 */
const getFlightDetailsById = async (id) => {
    return await db_config_1.default.oneOrNone("SELECT * FROM flight WHERE id = $1", [id]);
};
exports.getFlightDetailsById = getFlightDetailsById;
