const app = require('./backend');

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Listening...');
});
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
