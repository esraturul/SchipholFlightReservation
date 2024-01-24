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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlightDetails = exports.getFlight = exports.listFlights = void 0;
const schiphol_middleware_1 = __importDefault(require("../middlewares/schiphol-middleware"));
const extract_next_page_url_1 = require("../utils/extract-next-page-url");
const caching_middleware_1 = require("../middlewares/caching-middleware");
const flightQueries = __importStar(require("../database/queries/flight-queries"));
// Create an array to store all data
const allData = [];
/**
 * Fetch all pages from the API
 * @param pagePath
 */
const fetchAllPages = async (pagePath) => {
    const newData = await schiphol_middleware_1.default
        .get(pagePath)
        .then((response) => {
        return response;
    })
        .catch((error) => {
        throw error;
    });
    allData.push(newData.data);
    const paginationHeaders = newData.headers["link"];
    const nextPageUrl = (0, extract_next_page_url_1.extractNextPageUrl)(paginationHeaders);
    // If there's a next page URL, make another request
    if (nextPageUrl) {
        console.log("Fetching page:", nextPageUrl);
        const url = new URL(nextPageUrl);
        const nextPagePath = url.pathname + url.search;
        await fetchAllPages(nextPagePath);
    }
    // Return the flattened array
    return allData.flat(1);
};
/**
 * Get all flights from Schiphol API
 * @param req
 * @param res
 */
const listFlights = async (req, res) => {
    // D = departing, A = arriving
    // Refer to https://developer.schiphol.nl/apis/flight-api/v4/flights?version=latest#/ for more info on flight-controller
    const direction = req.query.direction || "D";
    const date = req.query.date;
    try {
        const cachedFlights = caching_middleware_1.cache.get("flights");
        if (cachedFlights !== undefined) {
            console.log("Serving from cache...");
            return res.json(cachedFlights);
        }
        else {
            console.log("Fetching from API...");
            const path = `/public-flights/flights?flightDirection=${direction}`;
            // If a date is provided, add it to the path
            if (date) {
                path.concat(`&scheduleDate=${date}`);
            }
            const fetchAllFlights = await fetchAllPages(path).then((data) => {
                return data[0];
            });
            console.log("Done fetching all pages, setting cache...");
            caching_middleware_1.cache.set("flights", fetchAllFlights);
            console.log("Serving from API...");
            return res.json(fetchAllFlights);
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.listFlights = listFlights;
/**
 * Get a single flight by ID from Schiphol API
 * @param id
 */
const getFlight = async (id) => {
    const flightId = id;
    try {
        const cachedFlight = caching_middleware_1.cache.get(flightId);
        if (cachedFlight !== undefined) {
            console.log("Serving from cache...");
            return cachedFlight;
        }
        else {
            console.log("Fetching from API...");
            const path = `/public-flights/flights/${flightId}`;
            const fetchFlight = await schiphol_middleware_1.default
                .get(path)
                .then((response) => {
                return response.data;
            })
                .catch((error) => {
                throw error;
            });
            console.log("Done fetching flight, setting cache...");
            caching_middleware_1.cache.set(flightId, fetchFlight, 180);
            console.log("Serving from API...");
            return fetchFlight;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
exports.getFlight = getFlight;
/**
 * Get flight details by ID
 * @param req
 * @param res
 */
const getFlightDetails = async (req, res) => {
    const { flight_id } = req.params;
    try {
        const flightDetails = await flightQueries.getFlightDetailsById(parseInt(flight_id));
        return res.json(flightDetails);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getFlightDetails = getFlightDetails;
