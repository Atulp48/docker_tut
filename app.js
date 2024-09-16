import express from "express";
import { datarouter } from "./route/data.router.js";
import { CONNECTION } from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", datarouter);

app.get("/", (req, res) => {
  res.json({
    message: " i am server",
  });
});

CONNECTION(process.env.DB_URL);

app.listen(port, (req, res) => {
  console.log(`listening on on port ${port}`);
});
