const express = require("express");
const app = express();
const nodeFs = require("fs");
var bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post(
  "/api/upload",
  bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }),
  (req, res, next) => {
    console.log(req.body);
    nodeFs.writeFileSync(
      "C:\\Users\\Prem\\Desktop\\projects\\damagic\\object_detection\\test_images\\prem.webp",
      req.body
    );
    const options = {
      uploadDir: "./tmp",
    };
    res.json({ uploadeed: true });
  }
);

app.listen(3002, function (err) {
  if (err) console.log(err);
  console.log("Server listening on Port 3002");
});
