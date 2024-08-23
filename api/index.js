import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo.route.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log(error);
  });

// for finding path dynamically
const __dirname = path.resolve();

// an express app
const app = express();
app.use(express.json());
app.use(bodyParser.json());

// defining directory of folder client statically
app.use(express.static(path.join(__dirname, "/client/dist")));

// from that static folder path, finding 'index.html' file and sending to client to render first
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.use("/api/v1", todoRoutes);

// middleware to handle error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error!";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
