import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function listOrders(req: Request, res: Response): Promise<Response> {
  const { status, data } = await ordersService.listOrders();
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  listOrders,
};