const express = require("express");
const User = require("../../models/Users");
const router = express.Router();
//const  = require("../../public/Users");
const config = require("config");
const limit = config.get("paginationLimit");
const uuid = require("uuid");
const { listIndexes } = require("../../models/Users");

//Get all Users
router.get("/", async (req, res) => {
  let pageNo = req.query.pageNo ? Number(req.query.pageNo) : 1;
  let skipNo = pageNo && pageNo > 0 ? (pageNo - 1) * limit : 0;
  try {
    const users = await User.find().lean();
    res.render("index", {
      title: "Users",
      users,
    });
  } catch (ex) {
    res.status(500).send({ msg: "Server Error" });
  }

  //res.json(users);
});

//Get user by id
router.get("/:id", (req, res) => {
  const found = User.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(User.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "Member not found" });
  }
});

//adding user
router.post("/", async (req, res) => {
  const { name, email, address } = req.body;
  const tone = getTone();

  try {
    user = new User({
      name,
      email,
      tone,
      address,
    });

    await user.save();
    res.redirect("/api/user");
  } catch (ex) {
    res.status(500).send({ msg: "Server Error" });
  }
});

const getTone = () => {
  const toneData = ["humorous", "ironic", "cynical"];
  const random = Math.floor(Math.random() * toneData.length);
  return toneData[random];
};

module.exports = router;
