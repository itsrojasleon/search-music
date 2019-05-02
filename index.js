const app = require('./backend');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Listening...');
});
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
