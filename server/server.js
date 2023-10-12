const express = require("express");
const app = express();

app.get("/api/test", (req, res) => {
  res.send([{ id: "2" }, { id: "1" }]);
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
