const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      'default-src': ["'self'"],
      'script-src': ["'self'", "'unsafe-inline'"],
      'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com/icon'],
      'font-src': ["'self'", 'https://fonts.gstatic.com/'],
      'img-src': ["'self'", 'data:'],
    },
  })
);
app.use(express.static(__dirname + '/dist/angular-bootstrap-toast-service'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-bootstrap-toast-service/index.html'));
});
app.listen(process.env.PORT || 8080);
