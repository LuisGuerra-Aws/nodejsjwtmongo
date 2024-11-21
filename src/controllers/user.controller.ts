/* eslint-disable prettier/prettier */
import { Response } from 'express';
import { CustomRequest } from '../configjwt/auth.middleware';
import { getAllUserService, getAuthenticateUserService } from '../Services/user.services';


export const getAllUsers = async (req: CustomRequest, res: Response) => {
  const users = await getAllUserService();

  res.status(200).json(users);
};

export const getAuthenticateUser = async (req : CustomRequest, res: Response) => {
  const { id } = req.user;

  const user = await getAuthenticateUserService(id);

  if (!user) {
    res.status(404).json({ message : 'Usuario no identificado '});
  }

  res.status(200).json(user);
};


