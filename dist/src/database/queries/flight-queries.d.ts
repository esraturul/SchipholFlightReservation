import { Flight } from "../../../types/app-types";
/**
 * This function creates a flight in the database
 * @param flight
 */
export declare const createFlight: (flight: Flight) => Promise<any>;
/**
 * This function gets flight details by schiphol id
 * @param id
 */
export declare const getFlightDetailsBySchipholId: (id: string) => Promise<any>;
/**
 * This function gets flight details by id
 */
export declare const getFlightDetailsById: (id: number) => Promise<any>;
