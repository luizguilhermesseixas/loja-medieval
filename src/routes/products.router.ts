import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.list);

export default productsRouter;