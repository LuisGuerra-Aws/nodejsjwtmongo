/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { UserInput } from '../models/user.model';
import { authenticateUserService, registerUserService } from '../Services/auth.services';

export const registerUser = async (req: Request, res: Response) => {
  const { email, fullName, password } = req.body;

  if (!email || !fullName || !password) {
    res.status(422).json({ message: 'los campos email, fullName, password son obligatorios' });
  }

  const userInput: UserInput = {
    fullName,
    email,
    password,
  };

  const usercreated = await registerUserService(userInput);

  res.status(201).json(usercreated);
};

export const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console.log(email);
  console.log(password);
  
  if (!email || !password) {
    res.status(422).json({ message: 'los campos email,  password son obligatorios' });
  }
  const token = await authenticateUserService(email, password);
  
  if (!token) {
    res.status(400).json({ message: 'Email o password están incorrectos' });
  }
  res.json(token);
};
