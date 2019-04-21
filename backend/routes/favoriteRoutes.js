const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Favorites = mongoose.model('favorites');

module.exports = app => {
  app.get('/api/favorites', requireLogin, async (req, res) => {
    const favorites = await Favorites.find({ user: req.user.id });
    // Send favorite songs to the client
    res.send(favorites);
  });

  app.post('/api/favorites', requireLogin, async (req, res) => {
    const { name, id } = req.body;

    // Query for get the id (Song)
    const songId = await Favorites.findOne({ song_id: id });

    const favorite = new Favorites({
      user: req.user.id,
      song_id: id,
      song_name: name
      //: songs.split(',').map(song => ({ song: song.trim() }))
    });
    try {
      if (songId) return null;

      await favorite.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
