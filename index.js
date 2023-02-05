const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();
const path = require('path');

let PORT = 3030;

app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, "client")));
app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`)
})