const Router = require("express");
const router = Router();

router.get("/hello", function (req, res, next) {
  var param = { result: "Hello World !" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

module.exports = router;
