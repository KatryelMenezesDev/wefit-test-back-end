import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import "@shared/container";
import { appConfig } from "@config/app";
import swaggerDocs from "@utils/Swagger";

import { handleErrors } from "./middlewares/handleErrors";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  cors({
    origin: "*"
  })
);

app.use(router);
app.use(handleErrors);

swaggerDocs(app);

app.listen(appConfig.port, () => {
  console.log(`Server is running on port ${appConfig.port}`);
});

export default app;
