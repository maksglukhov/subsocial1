const express = require("express");
const app = express();
const fs = require("fs");

app.get("/*", (req, res) => {
  let filePath = "./api/index.html";
  fs.readFile(filePath, function (error, data) {
    if (error) {
      res.statusCode = 404;
      res.end("Resourse not found!");
    } else {
      res.end(data);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
