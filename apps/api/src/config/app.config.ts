import * as dotenv from 'dotenv';

dotenv.config();
export const PORT = process.env.PORT || 3030;
export const DB_HOST = process.env.DB_HOST;
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;

export const JWT_SECRET = process.env.JWT_SECRET;
export const appEnvironnementVariables = {
  PORT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASS,
};
