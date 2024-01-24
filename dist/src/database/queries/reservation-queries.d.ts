/**
 * Create a reservation
 * @param flightId
 * @param seat
 * @param userId
 * @param status
 */
export declare const createReservation: (flightId: number, seat: string, userId: number, status: string) => Promise<null>;
/**
 * Get all reservations for a user
 * @param userId
 */
export declare const getUserReservations: (userId: number) => Promise<any[]>;
/**
 * Get all reservations for a user for a specific flight
 * @param userId
 * @param flightId
 */
export declare const getUserReservationsForFlight: (userId: number, flightId: number) => Promise<any[]>;
/**
 * Get all reservations
 */
export declare const getAllReservations: () => Promise<any[]>;
