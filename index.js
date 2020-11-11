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
app.use("/api/user", require("./routes/api/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
