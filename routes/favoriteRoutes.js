const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Favorites = mongoose.model('favorites');

module.exports = (app) => {
  app.get('/api/favorites', requireLogin, async (req, res) => {
    const favorites = await Favorites.find({ user_id: req.user.id });
    // Send favorite songs to the client
    res.send(favorites);
  });

  app.post('/api/favorites', requireLogin, async (req, res) => {
    const { name, album, artists, id, preview_url } = req.body;

    // Query for get the id (Song)
    const songId = await Favorites.findOne({ id: id });

    // Query for count the number of collections
    // So, I need ten collections
    // No more
    // It's a Sandbox database
    const songsNumber = await Favorites.countDocuments();

    const favorite = new Favorites({
      user_id: req.user.id,
      name,
      album,
      artists,
      id,
      preview_url
    });
    try {
      if (songId) return;
      else if (songsNumber >= 10) sreturn;
      // If doesn't exist a user... Save the favourite songs
      await favorite.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
