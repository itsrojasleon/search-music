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
    // const { name } = req.body;
    const name = Object.keys(req.body).join('');
    const favorite = new Favorites({
      name
      //: songs.split(',').map(song => ({ song: song.trim() }))
    });
    try {
      console.log('YEEEEEEEEEP');
      await favorite.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      console.log('NOOOOOOOP');
      res.status(422).send(err);
    }
  });
};
