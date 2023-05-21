const express = require("express");
const router = express.Router();
const cors = require("cors");
const { topHeadlines } = require("../controllers/topHeadlines");
const { everything } = require("../controllers/everything");
const { infiniteNews } = require("../controllers/infiniteNews");

//middleware
router.use(
  cors({
    credidentials: true,
    origin: "http://localhost:4001",
  })
);

router.get("/api/topHeadlines", topHeadlines);
router.get("/api/everything", everything);
router.get("/api/infiniteNews", infiniteNews);

module.exports = router;
