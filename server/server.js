const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

const PORT = 3000;

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
