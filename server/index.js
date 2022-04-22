const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all people
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM person", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})