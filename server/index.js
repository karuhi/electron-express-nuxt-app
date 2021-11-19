const Router = require("express");
const router = Router();
const path = require("path");

const CLIENT_PATH = "src/nuxtjs/dist/";

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", CLIENT_PATH, "index.html"));
});
router.use(Router.static(path.resolve(__dirname, "..", CLIENT_PATH)));

module.exports = router;
