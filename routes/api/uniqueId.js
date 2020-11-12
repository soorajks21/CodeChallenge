const express = require("express");
const router = express.Router();
const config = require("config");
const limit = config.get("paginationLimit");
const { getUsers } = require("../../common/userDetails");

// Get user by id
router.get("/", async (req, res) => {
    const users = await getUsers();
    res.render("uniqueId", {
      title: "Universal Identifier",
      users,
    });
  });

module.exports = router;
