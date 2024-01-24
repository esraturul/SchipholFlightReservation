"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReservation = void 0;
/**
 * Validates the reservation request
 * @param req
 * @param res
 * @param next
 */
const validateReservation = (req, res, next) => {
    const { flight_id, seat, user_id } = req.body;
    // Check if the required fields are present
    if (!flight_id || !seat || !user_id) {
        return res.status(400).json({
            error: "flight_id, seat and user_id are marked as required fields",
        });
    }
    next();
};
exports.validateReservation = validateReservation;
