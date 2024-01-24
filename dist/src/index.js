"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
// Check if a path to the .env file is provided as a command-line argument
const envFilePath = process.argv[2]; // process.argv[0] is the node binary, and process.argv[1] is the script file
// Check if the provided path exists and is a file
if (envFilePath && fs_1.default.existsSync(envFilePath) && fs_1.default.statSync(envFilePath).isFile()) {
    // Load environment variables from the provided .env file path
    dotenv_1.default.config({ path: envFilePath });
}
else {
    console.error('Invalid or missing .env file path');
    process.exit(1);
}
// Main application code
const express_1 = __importDefault(require("express"));
const reservation_routes_1 = __importDefault(require("./routes/reservation-routes"));
const flight_routes_1 = __importDefault(require("./routes/flight-routes"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const Reservation_1 = __importDefault(require("./models/Reservation"));
const Flight_1 = __importDefault(require("./models/Flight"));
const app = (0, express_1.default)();
const port = process.env.PORT;
// Initialize tables, if they don't exist
// To create reservation table, flight table must exist
(0, Flight_1.default)().then(() => (0, Reservation_1.default)());
// Middlewares
app.use(express_1.default.json());
// Routes
app.use("/flights", flight_routes_1.default);
app.use("/reservations", reservation_routes_1.default);
app.use("/users", user_routes_1.default);
// Start your Express.js server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
