const express = require("express");
const app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(5000, function() {
  console.log("Server is running on port 5000");
});
