require("newrelic");
const express = require("express");
// const cors = require("cors");
const Models = require("../database/cassandra.js");
const path = require("path");
const redis = require("redis");

// const React = require("react");
// const { renderToString } = require("react-dom/server");
// const Overview = require("../client/components/Overview.jsx");

const app = express();
const client = redis.createClient(6379);
// app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const cacheCheck = (req, res, next) => {
  client.get(req.params.id, (err, data) => {
    if (err) console.error(err);
    else if (data !== null) {
      res.json(JSON.parse(data));
      console.log("used cache");
    } else {
      next();
    }
  });
};

app.get("/favicon.ico", (req, res) => {
  res.sendStatus(200);
});

app.get("/api/restaurants/overview/:id", cacheCheck, (req, res) => {
  Models.getRestaurantById(req.params.id, (err, results) => {
    if (err) {
      res.status(404);
      console.error("Server says: something went wrong with the get", err);
      res.send("Check the server console!");
    } else {
      res.json(results.rows[0]);
      console.log("set cache");
      client.set(req.params.id, JSON.stringify(results.rows[0]));
    }
  });
});
app.get("/loaderio-9a7dbfdd5b44d524f544d7b848305b60", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../loaderio-9a7dbfdd5b44d524f544d7b848305b60.txt")
  );
});

app.listen(3002, () => console.log("listening on port 3002!"));

// function htmlTemplate(reactDom) {
//   return `
//       <!DOCTYPE html>
//       <html>
//       <head>
//           <meta charset="utf-8">
//           <title>React SSR</title>
//       </head>

//       <body>
//           <div id="app">${reactDom}</div>
//           <script src="./app.bundle.js"></script>
//       </body>
//       </html>
//   `;
// }
