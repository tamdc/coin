const express = require("express");
const path = require("path");
const basicAuth = require("express-basic-auth");

const app = express();

const PORT = process.env.PORT || 5000;

const auth = basicAuth({
  users: {
    admin: "123",
    user: "123",
  },
});

app
  .use(express.static(path.join(__dirname, "/build")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.use(auth);

app.get("/auth", auth, (req, res) => {
  if (req.auth.user === "admin") {
    res.send("admin here");
  }
  if (req.auth.user === "user") {
    res.send("user here");
  }
});
