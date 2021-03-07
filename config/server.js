const express = require("express");
const app = express();
const server = require("http").createServer(app);
const userRouter = require("../router/user");
const messageRouter = require("../router/message");

var port_number = process.env.PORT || 8080;
//

app.use(express.json());
app.use(express.static("public"));

app.use("/user", userRouter);
app.use("/message", messageRouter);

app.get("/", (req, res) => {
  res.send("Ankit Patidar");
});

server.listen(port_number);

module.exports = server;
