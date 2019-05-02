const { app, PORT } = require('./backend');

app.listen(PORT, () => {
  console.log('Listening...');
});
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
