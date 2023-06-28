import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const { status, data } = await loginService.login(username, password);
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  login,
};