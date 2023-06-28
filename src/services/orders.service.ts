import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderNumber } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

async function listOrders(): Promise<ServiceResponse<OrderNumber[]>> {
  const orders = await OrderModel.findAll({
    attributes: ['id', 'userId'],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });

  const data = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product) => product.id),
  }));

  return { status: 'SUCCESSFUL', data };
}

export default {
  listOrders,
};