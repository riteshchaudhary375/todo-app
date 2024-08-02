import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todo.route.js";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.use("/api/v1", todoRoutes);
