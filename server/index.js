require("newrelic");
const express = require("express");
const cors = require("cors");
const Models = require("../database/cassandra.js");
// const React = require("react");
// const { renderToString } = require("react-dom/server");
// const Overview = require("../client/components/Overview.jsx");

const app = express();

// app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // const jsx = <Overview />;
  const reactDom = renderToString(jsx);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end;
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
      console.log(results.rows[0]);
      res.json(results.rows[0]);
    }
  });
});
app.get("/loaderio-2226bf6a7755193224da43b5fae1afb6", (req, res) => {
  res.sendFile("../loaderio-2226bf6a7755193224da43b5fae1afb6.txt");
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
