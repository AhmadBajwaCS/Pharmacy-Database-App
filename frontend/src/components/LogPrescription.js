import React from 'react';
import './LogPrescription.css';

function LogPrescription(props) {
    return (
        <div className="log-body">
            <div className="helmet">
                test <br/>
            </div>

            <form className="frm1">


                <br/>

                Date of Birth:<br></br>
                <input type="text" name="dob" /> <br></br>
                SSN  <br></br>
                <input type="text" name="ssn" /> <br></br>
                Drug Name:<br></br>
                <input type="text" name="drug" /> <br></br>
                Physician:  <br></br>
                <input type="text" name="doc" /> <br></br>
                Refill Allowed? (y/n)  <br></br>
                <input type="text" name="refill" /> <br></br>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default LogPrescription;