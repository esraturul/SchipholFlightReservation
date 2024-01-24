import express from "express";
import * as flightController from "../controllers/flight-controller";
import { validateReservation } from "../middlewares/validation-middleware";
import * as reservationController from "../controllers/reservation-controller";

const router = express.Router();

router.get("/", flightController.listFlights);
router.post("/reserve",validateReservation,reservationController.reserveFlight,);

export default router;
