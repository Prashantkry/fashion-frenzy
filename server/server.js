const fs = require("fs");
const express = require("express");
const http = require("http");
const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT;

// connecting mongo db
const { mongoConnect } = require("./utility/mongo");

// const server = http.createServer(app);

// async function startServer() {
//   await mongoConnect();
//   server.listen(PORT, () => {
//     console.log(`Server is listening to ${PORT}`);
//   });
// }

mongoConnect().then(() => {
  http
    .createServer(
      {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
      },
      app
    )
    .listen(PORT, () => {
      console.log(`Server is listening to ${PORT}`);
    });
});

// startServer();
