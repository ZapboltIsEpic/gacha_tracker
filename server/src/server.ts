// const cors = require('cors');
// const express = require('express');
// const Users = require('models/usersModels');
// const connectDB = require('./utils/database');

// const app = express();
// app.use(cors());
// connectDB();
// const port = 3000;

// var DATABASENAME = "gachatrackerdb";
// var database;

// app.get('/api/gachatracker/gachatrackerusers', (req, res) => {
//   database.collection('gachatrackerusers').find().toArray((err, result) => {
//     if (err) throw err
//     res.send(result);
//   });
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));

import cors from 'cors';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import {Users} from './models/usersModel'; 
import {connectDB} from './utils/database';

const app = express();
app.use(cors());
connectDB();
const port = 3000;

const DATABASENAME = "gachatrackerdb";
let database: mongoose.Connection;

mongoose.connection.once('open', () => {
  database = mongoose.connection;
  console.log('Connected to MongoDB');
});

app.get('/api/gachatracker/gachatrackerusers', async (req: Request, res: Response) => {
  try {
    const users = await Users.find().exec();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));