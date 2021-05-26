const axios = require('axios').default;
const querystring = require('querystring');

module.exports = (app) => {
  app.get('/api/search', async (req, res) => {
    const {
      data: { access_token }
    } = await axios.post(
      'https://accounts.spotify.com/api/token',
      querystring.stringify({
        client_id: '1f1de3434f644b6ba9e51db097d9705d',
        client_secret: '9284379993814238a7c8a9953480b649',
        grant_type: 'client_credentials'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const { data } = await axios.get(
      `https://api.spotify.com/v1/search?q=${req.query.q}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    );

    res.status(200).send(data);
  });
};
