import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-9dr7dfq-shard-00-00.xesp75j.mongodb.net:27017,ac-9dr7dfq-shard-00-01.xesp75j.mongodb.net:27017,ac-9dr7dfq-shard-00-02.xesp75j.mongodb.net:27017/?ssl=true&replicaSet=atlas-52tevd-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
    });
    console.log("Database connection established");
  } catch (error) {
    console.log("Error connecting to Database: " + error);
  }
};
export default Connection;
