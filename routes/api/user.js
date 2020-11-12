const express = require("express");
const router = express.Router();
const User = require("../../models/Users");
const config = require("config");
const limit = config.get("paginationLimit");
const { getTone, getUsers } = require("../../common/userDetails");

//Get all Users
router.get("/", async (req, res) => {
  let pageNo = req.query.pageNo ? Number(req.query.pageNo) : 1;
  let skipNo = pageNo && pageNo > 0 ? (pageNo - 1) * limit : 0;
  try {
    const users = await getUsers();

    res.render("index", {
      title: "Users",
      users,
    });
  } catch (ex) {
    res.status(500).send({ msg: "Server Error" });
  }
});



//adding user
router.post("/", async (req, res) => {
  const { name, email, address } = req.body;
  const tone = await getTone();

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

module.exports = router;
