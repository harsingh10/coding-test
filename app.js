const express = require('express');

const app = express();
app.use(express.json());


app.use('/data', require('./routes/data'));
app.use('/', (err, req, res, next) => {

});

app.listen(3000, () => {
    console.log("server is up and running")
});
module.exports = app;