import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);


mongoose.connect(
  "mongodb+srv://kegkeg:rFSwdXSsmisTpeko@cluster0.bal5yxf.mongodb.net/Cluster0?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("Server started"));
