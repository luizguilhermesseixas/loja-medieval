import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types/JwtPayload';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const jwtOptions: jwt.SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const sign = (payload: JwtPayload): string => {
  const token = jwt.sign(payload, JWT_SECRET, jwtOptions);
  return token;
};

export default {
  sign, 
};