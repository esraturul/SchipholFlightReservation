import { Request, Response } from "express";
/**
 * Reserves a flight seat for a user
 * @param req
 * @param res
 */
export declare const reserveFlight: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Gets all reservations for a user
 * @param req
 * @param res
 */
export declare const getUserReservations: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Gets all reservations regardless of user
 * @param req
 * @param res
 */
export declare const getAllReservations: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
