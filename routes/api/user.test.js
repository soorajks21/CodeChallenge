const app = require("../../index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose");

const User = require("../../models/Users");
beforeAll(async () => {
  const db =
    "mongodb+srv://sooraj:june@345@usermanagement.7ptzc.mongodb.net/FinnAi?retryWrites=true&w=majority";
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
});

it("gets the test endpoint", async (done) => {
  const response = await request.get("/api/user");
  expect(response).toBeTruthy();
  done();
});

it("gets the uniqueId", async (done) => {
  const response = await request.get("/api/id");
  expect(response).toBeTruthy();
  done();
});

it("Should save user to database", async (done) => {
  const res = await request.post("/api/user").send({
    name: "binuuu",
    email: "ganesh@gmail.com",
    address: "23 crestwood",
  });

  const user = await User.findOne({ email: "ganesh@gmail.com" });
  expect(user.email).toBeTruthy();
  expect(user.name).toBeTruthy();
  done();
});
