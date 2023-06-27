import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(products: Product): Promise<ServiceResponse<ProductSequelizeModel>> {
  const data = await ProductModel.create(products);
  delete data.dataValues.orderId;
  return { status: 'CREATED', data };
}

async function list(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const data = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data };
}

export default {
  create,
  list,
};