const express = require("express");
const router = express.Router();

const checkNickPassword = require('./validUsers')

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

// define the about route
router.post('/logIn', function (req, res) {
  const body = req.body;
  if (checkNickPassword(body.name, body.pw)) {
    return (res.send({ok: true}).status(200))
  }
  return (res.send({ok: false}).status(401))
})

// define the about route
router.post('/signIn', function (req, res) {
  const body = req.body;
  if (checkNickPassword(body.name, body.pw)) {
    return (res.send({ok: true}).status(201))
  }
  return (res.send({ok: false}).status(400))
})

module.exports = router;