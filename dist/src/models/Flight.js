"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../database/db-config"));
/**
 * Create a flight table if it doesn't exist
 */
const createFlightTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS Flight (
    id SERIAL PRIMARY KEY,
    flight_name VARCHAR(255),
    departure_date DATE,
    departure_time TIME,
    destination_airport VARCHAR(255),
    airline_prefix VARCHAR(5),
    schiphol_id VARCHAR(255)
    )`;
    try {
        await db_config_1.default.query(query);
        console.log("Flight table created (if not exists)");
    }
    catch (error) {
        console.error("Error creating flight table:", error);
    }
};
exports.default = createFlightTable;
