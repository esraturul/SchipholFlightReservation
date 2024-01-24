// validation-middleware.ts
import { Request, Response, NextFunction } from 'express';

export const validateReservation = (req: Request, res: Response, next: NextFunction) => {
  // Burada rezervasyonun doğruluğunu kontrol etmek için gerekli işlemleri gerçekleştirin
  // Örneğin, gelen verilerin uygunluğunu, varlığını ve geçerliliğini kontrol edebilirsiniz.

  // Örnek: Gelen istekte reservation adlı bir alanın varlığını kontrol etme
  if (!req.body.reservation) {
    return res.status(400).json({ error: 'Reservation data is missing' });
  }

  // Burada başka kontrolleri ekleyebilirsiniz

  // Eğer hata yoksa, bir sonraki middleware'e veya route'a geç
  next();
};

export const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
  // Burada kayıt işleminin doğruluğunu kontrol etmek için gerekli işlemleri gerçekleştirin
  // Örneğin, gelen kullanıcı bilgilerinin uygunluğunu, varlığını ve geçerliliğini kontrol edebilirsiniz.

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

  // Burada başka kontrolleri ekleyebilirsiniz

  // Eğer hata yoksa, bir sonraki middleware'e veya route'a geç
  next();
};
