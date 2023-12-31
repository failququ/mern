import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//CONSTANTS
const PORT = process.env.PORT || 3002;
const DB_CONNECTION = process.env.DB_CONNECTION;

//MIDDLEWARES
app.use(express.json());

//RUN
app.listen(PORT, (err) => {
  if (err) return console.log(err);

  console.log(`running on port ${PORT}`);
});
