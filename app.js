const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(
    '<html lang="en"><head><title>Login</title></head><body><a href="/login/Jon">Login</a><br><a href="/hello">Say Hello</a> </body></html>'
  );
});

app.get("/login", (req, res) => {
  console.log(req.query);
  res.cookie("name", req.query.name);
  res
    .status(200)
    .send(
      `<html lang="en"><head><title>Login</title></head><body><a href="/hello">Say Hello</a> ${req.query.number} </body></html>`
    );
});

app.get("/hello", (req, res) => {
  res.send(`Welcome ${req.cookies.name}!`);
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

module.exports = app;
