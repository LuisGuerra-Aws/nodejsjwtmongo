/* eslint-disable prettier/prettier */
import express from 'express';
import { connectToDatabase } from './database/dbconection';
import { authenticateUser, registerUser } from './controllers/auth.controller';
import { getAllUsers, getAuthenticateUser } from './controllers/user.controller';
import { authMiddleware } from './configjwt/auth.middleware';

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authMiddleware);

app.get('/', (req , res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/auth/signup', registerUser);
app.post('/auth/login', authenticateUser);
// @ts-ignore
app.get('/users', getAllUsers);
// @ts-ignore
app.get('/users/me', getAuthenticateUser);
app.listen(PORT, async () => {
  await connectToDatabase();
  
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});