const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all people
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM person",
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});

// Route to add new person
app.post('/api/create', (req, res) => {
    const fn = req.body.FirstName;
    const ln = req.body.LastName;
    const ssn = req.body.SSN;
    const address = req.body.Address;
    const dob = req.body.DateOfBirth

    db.query("INSERT INTO person (FirstName, LastName, SSN, Address, DateOfBirth) VALUES (?,?,?,?,?)", [fn, ln, ssn, address, dob],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        });
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})