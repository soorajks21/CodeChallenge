const { PromiseProvider } = require("mongoose");
let uniqueId = require("./api/uniqueId");
let user = require("./api/user");

module.exports = function (app) {
  app.use("/api/user", user);
  app.use("/api/id", uniqueId);
};
