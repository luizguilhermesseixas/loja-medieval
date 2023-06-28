import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponseError, ServiceResponseSuccess } from '../types/ServiceResponse';
import jwtUtils from '../utils/jwtUtils';

async function login(username: string, password: string): 
Promise<ServiceResponseError | ServiceResponseSuccess<object>> {
  if (!username || !password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
  
  const findUser = await UserModel.findOne({ where: { username } });
  
  if (!findUser || !bcrypt.compareSync(password, findUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' }, 
    };
  }

  const token = jwtUtils.sign({
    id: findUser.dataValues.id,
    username: findUser.dataValues.username, 
  });
  
  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  login,
};