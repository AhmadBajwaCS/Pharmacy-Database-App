const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all people
app.get("/api/getPeople", (req, res) => {
    db.query("SELECT * FROM person",
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});

// Get all prescribers
app.get("/api/getPrescribers", (req, res) => {
    db.query("SELECT * FROM physician",
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});

// get person
app.get("/api/getPerson/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM person WHERE id=?", id, (err, result) => {
        if (err) {
            (console.log(err));
        } else {
            res.send(result);
        }
    })
})

// get prescriber as a person item
app.get("/api/getPrescriberNames", (req, res) => {
    db.query("SELECT * FROM person WHERE EXISTS (SELECT * FROM physician WHERE person.SSN = physician.SSN_Phy)", (err, result) => {
        if (err) {
            (console.log(err));
        } else {
            res.send(result);
        }
    })
})

// get drugs lmao
app.get("/api/getDrugs", (req, res) => {
    db.query("SELECT * FROM drug_info", (err, result) => {
        if (err) {
            (console.log(err));
        } else {
            res.send(result);
        }
    })
})

// Add new person
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

// Log new prescription
app.post('/api/createPresciption', (req, res) => {
    const prescription = req.body.PrescriptionID;
    const drug = req.body.DrugID_P;
    const prescriber = req.body.PrescriberID_P;
    const customer = req.body.CustomerID_P;

    db.query("INSERT INTO prescription_info (PrescriptionID, DrugID_P, PrescriberID_P, CustomerID_P) VALUES (?,?,?,?)", [prescription, drug, prescriber, customer],
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