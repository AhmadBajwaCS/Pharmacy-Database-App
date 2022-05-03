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

// get all drug inv
app.get("/api/getDrugInv", (req, res) => {
    db.query("SELECT * FROM drug_inventory",
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});

// get all prescription status
app.get("/api/getPrescStatus", (req, res) => {
    db.query("SELECT * FROM prescription_status",
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

// get physician using ssn
app.get("/api/getPhysician/:SSN", (req, res) => {
    const SSN = req.params.SSN;
    db.query("SELECT * FROM physician WHERE SSN_Phy=?", SSN, (err, result) => {
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
            console.log(result);
        });
})

// Log new prescription
app.post('/api/createPrescription', (req, res) => {
    const prescription = req.body.PrescriptionID;
    const drug = req.body.DrugID_P;
    const prescriber = req.body.PrescriberID_P;
    const customer = req.body.CustomerID_P;
    const refillAllowed = req.body.IsRefillAllowed;
    const isFilled = false;


    // Disable the foreign key checks and then re-enable them. What could go wrong?
    db.query("SET FOREIGN_KEY_CHECKS=0");

    // Log into prescription_status
    db.query("INSERT INTO prescription_status (PrescriberID, CustomerID, DrugID, IsFilled, IsRefillAllowed) VALUES (?,?,?,?,?)", [prescriber, customer, drug, isFilled, refillAllowed],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result);
        });

    // Log into prescription_info
    db.query("INSERT INTO prescription_info (PrescriptionID, DrugID_P, PrescriberID_P, CustomerID_P) VALUES (?,?,?,?)", [prescription, drug, prescriber, customer],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result);
        });


    db.query("SET FOREIGN_KEY_CHECKS=1");
})

// find greatest value
app.get('/api/getLargestPrescription', (req, res) => {
    db.query("SELECT MAX(PrescriptionID) FROM prescription_info",
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result);
        });
})

//get customer using DOB and SSN
app.get('/api/getCustomer/:SSN/:DOB', (req, res) => {
    const dob = req.params.DOB;
    const ssn = req.params.SSN;

    //db.query("SELECT customer.CustomerID FROM customer WHERE customer.SSN_C=?", ssn,

    // I hate programming. I'm moving to the woods.
    db.query("SELECT g.CustomerID FROM (SELECT customer.CustomerID, person.DateOfBirth, person.SSN FROM customer INNER JOIN person ON customer.SSN_C=person.SSN) AS g WHERE g.DateOfBirth=? AND g.SSN=?", [dob, ssn],
        (err, result) => {
            if (err) {
                (console.log(err));
            }
            res.send(result);
            console.log(result);
        });
})

// get all customers
app.get("/api/getCustomers", (req, res) => {
    db.query("SELECT * FROM customer",
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result);
        });
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})