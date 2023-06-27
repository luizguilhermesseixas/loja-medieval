import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import listMock from '../../mocks/list.mock';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () { sinon.restore(); });
  it('Deve devolver um status 200 e uma lista de produtos', async function () {
    const mockFindAllReturn = listMock.validListResponse.map((product) => {
      return ProductModel.build(product);
    });
    sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);
    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.eq(200);
    expect(httpResponse.body).to.be.deep.eq(listMock.validListResponse);
  })
});
