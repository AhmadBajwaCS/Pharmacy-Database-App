import React from 'react';
import './AddNewCustomer.css';

function AddNewCustomer(props) {
    return (
        <div>
            <form>
                First Name:<br></br>
                    <input type="text" name="fname" /> <br></br>
                Last Name:  <br></br>
                    <input type="text" name="lname" /> <br></br>
                Date of Birth:<br></br>
                <input type="text" name="dob" /> <br></br>
                Address  <br></br>
                <input type="text" name="address" /> <br></br>
                SSN  <br></br>
                <input type="text" name="ssn" /> <br></br>
            </form>
        </div>
    );
}

export default AddNewCustomer;