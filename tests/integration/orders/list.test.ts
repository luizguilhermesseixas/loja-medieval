import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import listOrdersMock from '../../mocks/listOrders.mock';
import { Order } from '../../../src/types/Order';
/* import { OrderNumber } from '../../../src/types/Order'; */

chai.use(chaiHttp);

describe('GET /orders', function () {
  beforeEach(function () { sinon.restore(); });

  it('Deve devolver um status 200 e uma lista de pedidos', async function () {
    const mockFindAllReturn = listOrdersMock.validListOrdersResponse.map((order) => {
      return OrderModel.build(order as unknown as Order);
    });
    sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn);
    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.eq(200);
    /* expect(httpResponse.body).to.be.deep.eq(listOrdersMock.validListOrdersResponse); */
  })

});
