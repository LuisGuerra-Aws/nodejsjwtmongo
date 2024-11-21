/* eslint-disable prettier/prettier */
import { generateJwtToken, TokenPayload } from '../helpers/jwt';

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRE = parseInt(process.env.JWT_EXPIRATION_DATE || '3600', 10);

export const generateToken = async (iduser: string) => {
  const tokenInfo: TokenPayload = { id: iduser };

  const token = generateJwtToken(tokenInfo, JWT_SECRET, JWT_EXPIRE);

  return { token, expiresIn: JWT_EXPIRE };
};
