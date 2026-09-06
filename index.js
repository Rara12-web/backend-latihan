const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Backend ${process.env.APP_NAME} berhasil berjalan!`);
});

app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello from NourishVision Backend!",
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});