const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();

connectDB();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.redirect("/api/user");
});
require("./routes/routeList")(app);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server started on Port ${PORT}`)
);

module.exports = server;
