import cors from 'cors';
import http from 'http';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import 'reflect-metadata';

import {declareHandler} from './middleware/declareHandler';
import {Users} from './models/usersModel'; 
import {connectDB} from './utils/database';
import MainController from './controllers/main';
import { defineRoutes } from './modules/routes';

export const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = async () => {
  app.use(cors());
  connectDB();
  const port = 3000;

  const DATABASENAME = "gachatrackerdb";
  let database: mongoose.Connection;

  // mongoose.connection.once('open', () => {
  //   database = mongoose.connection;
  //   console.log('Connected to MongoDB');
  // });

  app.use(declareHandler);

  defineRoutes([MainController, Users], app);

  app.listen(port, () => console.log(`Server running on port ${port}`));
}

export const Shutdown = (callback: any) => {
  mongoose.connection.close(false).then(() => {
    console.log('Mongoose connection closed');
    callback();
  }).catch((err) => {
    console.error('Error closing Mongoose connection:', err);
    callback(err);
  });
};

Main().catch(err => console.error('Error starting server:', err));