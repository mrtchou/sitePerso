const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/contact", (req, res) => {
  res.send(req.body);
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
