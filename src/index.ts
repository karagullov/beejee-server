import express from "express";
import cors from "cors";
import cookieParse from "cookie-parser";
import { router } from "./router";
import { PORT, __prod__ } from "./constants";

const app = express();

app.use(
  cors({
    origin: __prod__
      ? "https://beejee-client-27f1tva1u-erlannn777.vercel.app"
      : "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParse());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
