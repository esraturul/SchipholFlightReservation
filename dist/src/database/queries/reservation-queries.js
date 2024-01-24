"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllReservations = exports.getUserReservationsForFlight = exports.getUserReservations = exports.createReservation = void 0;
const db_config_1 = __importDefault(require("../db-config"));
/**
 * Create a reservation
 * @param flightId
 * @param seat
 * @param userId
 * @param status
 */
const createReservation = async (flightId, seat, userId, status) => {
    return await db_config_1.default.none("INSERT INTO reservation (flight_id, seat, user_id, status) VALUES ($1, $2, $3, $4)", [flightId, seat, userId, status]);
};
exports.createReservation = createReservation;
/**
 * Get all reservations for a user
 * @param userId
 */
const getUserReservations = (userId) => {
    return db_config_1.default.any("SELECT * FROM reservation WHERE user_id = $1", [userId]);
};
exports.getUserReservations = getUserReservations;
/**
 * Get all reservations for a user for a specific flight
 * @param userId
 * @param flightId
 */
const getUserReservationsForFlight = (userId, flightId) => {
    return db_config_1.default.any("SELECT * FROM reservation WHERE user_id = $1 AND flight_id = $2", [userId, flightId]);
};
exports.getUserReservationsForFlight = getUserReservationsForFlight;
/**
 * Get all reservations
 */
const getAllReservations = () => {
    return db_config_1.default.any("SELECT * FROM reservation");
};
exports.getAllReservations = getAllReservations;
