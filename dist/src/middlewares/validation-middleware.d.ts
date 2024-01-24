import { Request, Response, NextFunction } from "express";
/**
 * Validates the reservation request
 * @param req
 * @param res
 * @param next
 */
export declare const validateReservation: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
