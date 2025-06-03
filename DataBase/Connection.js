const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Viavi_Web')
    .then(() => console.log("Database connection successful"))
    .catch(err => console.error("Database connection error:", err));
