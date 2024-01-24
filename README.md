# C-FLIGHT

It was designed as a flight reservation site for an airline company. Schiphol airport infrastructure was used for API usage.

## Features

- Router.get("/", flightController.listFlights);: This endpoint runs the flightController.listFlights function when called with an HTTP GET request. This is a process that lists all flights.

- Router.post("/reserve", validateReservation, reservationController.reserveFlight);: This endpoint runs the validateReservation middleware and the reservationController.reserveFlight function sequentially when called with an HTTP POST request. This handles the process of booking a flight.

- FlightController.listFlights and reservationController.reserveFlight functions are controller functions that perform certain functions. For example, they manage the process of listing or booking flights.This function performs an operation that lists all reservations.

- Router.get("/:user_id/reservations", reservationController.getUserReservations); This endpoint is designed to retrieve reservations for a user specified by the ":user_id" parameter. The reservationController.getUserReservations function responds to the client by fetching reservations for the specified user_id.

- Router.get("/:user_id/flight-details/:flight_id", flightController.getFlightDetails); This endpoint is designed to retrieve details of a specific flight for a user specified by the ":user_id" and ":flight_id" parameters. The flightController.getFlightDetails function responds to the client by fetching the flight details for the specified user_id and flight_id.

- Router.post('/auth/register', validateRegistration, authController.registerUser); This endpoint allows a new user to register with the application.

- Router.post('/auth/login', authController.loginUser); This endpoint allows a user to log in to the application.

- Router.post('/auth/logout', authController.logoutUser); This endpoint allows a user to log out of the application.
- https://lunar-robot-631834.postman.co/workspace/New-Team-Workspace~cedce08a-82a1-4f29-b10f-5b5743864695/collection/24970425-2ec01f4b-6cef-499a-bac0-3f336a334528?action=share&creator=24970425 (Postman Collection)

## Prerequisites

- Node.js and npm installed
- PostgreSQL database set up
- TypeScript compiler

## Dependencies

- @types/bcryptjs, @types/body-parser, @types/cors, types/jsonwebtoken, types/express, @types/express-session, @types/pg, consola, prettier
- @prisma/client, @types/cookie-parser, @types/passport, @types/passport-jwt, axios, dotenv
