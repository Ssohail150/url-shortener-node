import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import urlRoutes from "./routes/url.routes.js";
import { redirectURL } from "./controllers/url.controller.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/v1", urlRoutes);
app.get("/:code", redirectURL);

export default app;
