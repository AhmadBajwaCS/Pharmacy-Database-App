import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import './AddNewCustomer.css';
import './LogPrescription.css';

function AddNewCustomer(props) {

    const [postList,setPostList]=useState([]);

    let history = useHistory();

    useEffect(
        ()=>{Axios.get("http://localhost:3002/api/getPeople").then((data)=>{setPostList(data.data)});},
        [])


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ssn, setSsn] = useState("");
    const [address, setAddress] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(new Date()); // TODO: make sure this is the correct state

    const submitCustomer = () => {
        Axios.post('http://localhost:3002/api/create', {
            FirstName: firstName,
            LastName: lastName,
            SSN: ssn,
            Address: address,
            DateOfBirth: dateOfBirth
        })
    }

    return (
        <div className='newCus'>

            <div className="helmet">
              <h1 className='header'> PHARMACY DB</h1><br/>
            </div>

                
                <form className='frm1'>
                    <div className='frm-contents'>
                    <h2>
                        &emsp; Add New Customer &emsp;
                    </h2>
                    <br/>

                   First Name: <br></br>
                    <input 
                        type="text" 
                        name="fnamein"
                        onChange={(event) => {setFirstName(event.target.value);}}
                    />
                    <br></br>

                    Last Name: <br></br>
                    <input 
                        type="text" 
                        name="lnamein" 
                        onChange={(event) => {setLastName(event.target.value);}}
                    />
                    <br></br>
                    
                    Date of Birth: <br></br>
                    <input 
                        type="text" 
                        name="dobin" 
                        onChange={(event) => {setDateOfBirth(event.target.value);}}
                    />
                    <br></br>

                    Address:<br></br>
                    <input 
                        type="text" 
                        name="addressin" 
                        onChange={(event) => {setAddress(event.target.value);}}
                    />
                    <br></br>
                    
                    SSN:<br></br>
                    <input 
                        type="text" 
                        name="ssnin" 
                        onChange={(event) => {setSsn(event.target.value);}}
                    />
                    <br></br>
                    <br></br>
                    
                    <input type="submit" value="Submit"/>
                    </div>
                </form>
                
            <div className='currentCustomerList'>
                {postList.map((val,key)=>{ return (
                    <div className="Post">
                        <p>{val.FirstName} {val.LastName}  |  {val.SSN}  |  {val.Address}  |  {val.DateOfBirth}</p>
                    </div>
                )})}
            </div>
        </div>
    );
}

export default AddNewCustomer;