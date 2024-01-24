import fs from "fs";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import reservationRoutes from "./routes/reservation-routes";
import flightRoutes from "./routes/flight-routes";
import userRoutes from "./routes/user-routes";
import createReservationTable from "./models/Reservation";
import createFlightTable from "./models/Flight";

const envFilePath = process.argv[2];

if (envFilePath && fs.existsSync(envFilePath) && fs.statSync(envFilePath).isFile()) {
  dotenv.config({ path: envFilePath });
} else {
  console.error('Invalid or missing .env file path');
  process.exit(1);
}

const app = express();
const port = process.env.PORT;

createFlightTable().then(() => createReservationTable());

// Middlewares
app.use(express.json());

// CORS ayarları
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization',
}));

// Rotalar
app.use("/flights", flightRoutes);
app.use("/reservations", reservationRoutes);
app.use("/users", userRoutes);

// Sunucu dinleme
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
