import cors from 'cors';
import http from 'http';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import {declareHandler} from './middleware/declareHandler';
import {Users} from './models/usersModel'; 
import {connectDB} from './utils/database';

export const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
  app.use(cors());
  connectDB();
  const port = 3000;

  const DATABASENAME = "gachatrackerdb";
  let database: mongoose.Connection;

  mongoose.connection.once('open', () => {
    database = mongoose.connection;
    console.log('Connected to MongoDB');
  });

  app.use(declareHandler);

  app.listen(port, () => console.log(`Server running on port ${port}`));
}