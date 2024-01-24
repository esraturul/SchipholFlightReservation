import { Request, Response } from "express";
/**
 * Get all flights from Schiphol API
 * @param req
 * @param res
 */
export declare const listFlights: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Get a single flight by ID from Schiphol API
 * @param id
 */
export declare const getFlight: (id: string) => Promise<any>;
/**
 * Get flight details by ID
 * @param req
 * @param res
 */
export declare const getFlightDetails: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
