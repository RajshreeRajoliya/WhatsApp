import express from "express";

import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Router from "./routes/route.js";
import cors from 'cors';

const app = express();
app.use("/", Router);
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.json({ extended: true }));
const PORT = 8000;
app.listen(PORT, () => {
  console.log("listening on port", PORT);
  // console.log(USERNAME, PASSWORD);
});
Connection();
