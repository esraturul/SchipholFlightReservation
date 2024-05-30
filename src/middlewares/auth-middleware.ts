// validation-middleware.ts
import { Request, Response, NextFunction } from 'express';

export const validateReservation = (req: Request, res: Response, next: NextFunction) => {


  // Örnek: Gelen istekte reservation adlı bir alanın varlığını kontrol etme
  if (!req.body.reservation) {
    return res.status(400).json({ error: 'Reservation data is missing' });
  }


  // Eğer hata yoksa, bir sonraki middleware'e veya route'a geç
  next();
};

export const validateRegistration = (req: Request, res: Response, next: NextFunction) => {


  // Örnek: Gelen istekte username, password ve email adlı alanların varlığını kontrol etme
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Username, password, and email are required' });
  }

  // E-posta formatını kontrol etme
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Eğer hata yoksa, bir sonraki middleware'e veya route'a geç
  next();
};
