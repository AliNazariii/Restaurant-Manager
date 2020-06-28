const app = require('./app');

app.listen(process.env.backend_PORT, () => {
    console.log('Server is up and running on port: ' + process.env.backend_PORT);
});