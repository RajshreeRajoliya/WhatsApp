import express from 'express';
import Connection from './database/db.js';
import Route from './routes/route.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

Connection();

app.listen(PORT, () =>
 console.log(`Server is running successfully on PORT ${PORT}`));

 app.use(cors());
 app.use('/', Route);