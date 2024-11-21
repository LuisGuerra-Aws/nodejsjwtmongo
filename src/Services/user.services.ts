/* eslint-disable prettier/prettier */
import { UserRepository } from '../Repositories/user.repository';

export const getAllUserService = async() => {
  const users = await UserRepository.find().sort('-createAt').exec();

  return ({data : users });
};

export const getAuthenticateUserService = async (id : string) => {
  const user = await UserRepository.findOne({ _id : id });

  if(!user) {
    return null;
  }

  return ({ data : user });
};