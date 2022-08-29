const express = require('express');
const path = require("path")
const app = express();
const { getCameraData } = require("../models/cameras")

app.get('/api/camera', (req, res) =>{
    let cameras = getCameraData();
    res.send(cameras);
})

app.get('/', (req, res) => {
    return res.sendFile(path.resolve("../view/index.html"));
});

app.listen(process.env.PORT, () =>
    console.log(`App listening on port ${process.env.PORT}!`),
);