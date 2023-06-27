import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () { sinon.restore(); });
  it('Deve devolver um status 201 e os dados do novo produto ao enviar um produto para cadastro', async function () {
    const httpRequestBody = productsMock.validProductsBody;
    const mockCreateReturn = ProductModel.build(productsMock.validBodyResponse);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.eq(201);
    expect(httpResponse.body).to.be.deep.eq(productsMock.productsResult);
  })
});
