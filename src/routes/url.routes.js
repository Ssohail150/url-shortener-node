import express from "express";

import {
  createURL,
  getRecentURLs,
  deleteURL,
} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/shorten", createURL);

router.get("/urls", getRecentURLs);

router.delete("/urls/:id", deleteURL);

export default router;
