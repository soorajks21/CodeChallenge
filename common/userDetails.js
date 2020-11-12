const User = require("../models/Users");

const getTone = () => {
  const toneData = ["humorous", "ironic", "cynical"];
  const random = Math.floor(Math.random() * toneData.length);
  return toneData[random];
};

const getUsers = () => {
  const users = User.find().lean();
  return users;
};

module.exports = {
  getTone,
  getUsers,
};
