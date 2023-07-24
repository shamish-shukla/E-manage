import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import mongoose, { mongo } from "mongoose";

dotenv.config({ path: "./config/config.env" });
const app = express();

const port = process.env.PORT || 7000;

mongoose.connect(
  "mongodb+srv://shamishshukla56:SHAMISH1056@cluster0.195wnx5.mongodb.net/?retryWrites=true&w=majority"
);

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
