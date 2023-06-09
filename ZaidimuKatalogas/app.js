const express = require("express");
const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.static("static"));

let loader = new TwingLoaderFilesystem(path.join(__dirname, "views"));
let twing = new TwingEnvironment(loader);

app.get("/", (req, res) => {
  twing
    .render("main.html", {})

    .then((output) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(output);
      return res.end();
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
