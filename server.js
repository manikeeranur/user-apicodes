import express from "express";
import userRouter from "./routes/user.route.js";
import connectDB from "./lib/db.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log(`Backend Server is Started http://localhost:${PORT}`);
});
