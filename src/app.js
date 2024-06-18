import express from "express";
import config from "./config";
import router from "./routes/user";

const app = express();

app.set("port", config.app.port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", router);

export default app;
