import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response): Promise<Response> {
  const result = req.body;
  const { status, data } = await productsService.create(result);
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  create,
};