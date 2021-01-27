const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

// define the about route
router.get('/about', function (req, res) {
  res.send({muchosDatos: "Hola mundo"})
})

module.exports = router;