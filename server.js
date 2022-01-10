const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/angular-bootstrap-toast-service'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-bootstrap-toast-service/index.html'));
});
app.listen(process.env.PORT || 8080);
