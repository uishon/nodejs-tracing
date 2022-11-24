const express = require("express");
const logger = require("./logger")

const PORT = parseInt(process.env.PORT || "8080");
const app = express();

logger.log("info", "hello world");

app.get("/", (req, res) => {
    logger.log("info", "serving / with hello world");
    res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
