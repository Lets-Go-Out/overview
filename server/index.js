require("newrelic");
const express = require("express");
// const cors = require("cors");
const Models = require("../database/cassandra.js");
const path = require("path");
// const React = require("react");
// const { renderToString } = require("react-dom/server");
// const Overview = require("../client/components/Overview.jsx");

const app = express();

// app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   // const jsx = <Overview />;
//   const reactDom = renderToString(jsx);

//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end;
// });
app.get("/favicon.ico", (req, res) => {
  res.sendStatus(200);
});
app.get("/api/restaurants/overview/:id", (req, res) => {
  console.log("request params: ", req.params);
  Models.getRestaurantById(req.params.id, (err, results) => {
    if (err) {
      res.status(404);
      console.error("Server says: something went wrong with the get", err);
      res.send("Check the server console!");
    } else {
      console.log("Server success!: ");
      res.json(results.rows[0]);
    }
  });
});
app.get("/loaderio-7d462d45ea42d073f47c53d0b6dff463", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../loaderio-7d462d45ea42d073f47c53d0b6dff463.txt")
  );
});
app.use(err => {
  if (err) {
    console.log("here");
    console.error(err);
  }
});
app.listen(3002, () => console.log("listening on port 3002!"));

function htmlTemplate(reactDom) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>React SSR</title>
      </head>
      
      <body>
          <div id="app">${reactDom}</div>
          <script src="./app.bundle.js"></script>
      </body>
      </html>
  `;
}
