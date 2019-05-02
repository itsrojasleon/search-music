const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// Models
require('./models/User');
require('./models/Favorite');

// Services
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require and call the function
require('./routes/authRoutes')(app);
require('./routes/favoriteRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'frontend', 'build', 'index.html')
    );
  });
}

const PORT = process.env.PORT || 5000;

module.exports = { app, PORT };
