//Install express server
const express = require("express");
const path = require("path");
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/communify-app"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/communify-app/index.html"));
});

// Start the app by listening on the default Heroku port
https.createServer(options, app).listen(process.env.PORT || 8080)
