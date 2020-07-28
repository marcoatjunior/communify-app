const express = require("express");
const path = require("path");
const enforce = require('express-sslify');
const http = require('http');

const app = express();

app.use(express.static(__dirname + "/dist/communify-app"));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/communify-app/index.html"));
});

http.get('*', function(req, res) {  
  res.redirect('https://' + req.headers.host + req.url);
})

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Express server listening on port ' + process.env.PORT || 8080);
});
