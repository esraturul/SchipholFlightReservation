// auth-controller.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../database/db-config';
import User from '../models/Users';

const generateJwtToken = (userId: number): string => {
  const secretKey = '123abc';
  return jwt.sign({ userId }, secretKey, { expiresIn: '15m' });
};

const handleError = (res: Response, statusCode: number, errorMessage: string): void => {
  console.error(errorMessage);
  res.status(statusCode).json({ error: errorMessage });
};

const handleSuccess = (res: Response, statusCode: number, data?: any): void => {
  res.status(statusCode).json(data);
};

 const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );

    const newUser: User = result.rows[0];
    handleSuccess(res, 201, newUser);
  } catch (error) {
    handleError(res, 500, 'Internal Server Error');
  }
};

 const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user: User = result.rows[0];

    if (!user) {
      return handleError(res, 401, 'Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return handleError(res, 401, 'Invalid email or password');
    }

    const token = generateJwtToken(user.id);
    handleSuccess(res, 200, { token });
  } catch (error) {
    handleError(res, 500, 'Internal Server Error');
  }
};

const logoutUser = (req: Request, res: Response) => {
  handleSuccess(res, 200, 'Logout successful');
};

export { registerUser, loginUser, logoutUser };