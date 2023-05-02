import express from 'express';
import { addUser } from '../controller/user-controller';

const route = express.Router();

route.post('/add', addUser);