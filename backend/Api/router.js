// Import libraries
const express = require("express");
// Import modules
const {checkNickPassword, createUser} = require('./validUsers');

// Create a router module
const router = express.Router();

/**
 * default URI, check if the server is up and running
 * @param {object} req request
 * @param {object} res response
 */
router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

/**
 * logIn URI, ask for permission to entry in the chat server
 * @param {object} req request
 * @param {object} res response
 */
router.post('/logIn', function (req, res) {
  const body = req.body;

  // if the user exist in db and is already disconnected,
  // allow the permission to get in to chat server
  if (checkNickPassword(body.name, body.pw)) {
    return (res.send({ok: true}).status(200));
  }
  // else, deny the permission to get in the chat server
  return (res.send({ok: false}).status(401));
})

/**
 * signIn URI, create a new user if the nick does no exist
 * @param {object} req request
 * @param {object} res response
 */
router.post('/signIn', function (req, res) {
  const body = req.body;

  // if the user doesnot exist in db, created the user
  if (createUser(body.name, body.pw)) {
    return (res.send({ok: true}).status(201));
  }
  // else, do not create it
  return (res.send({ok: false}).status(400));
})

// make the router module public
module.exports = router;
