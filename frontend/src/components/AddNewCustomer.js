import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import './AddNewCustomer.css';

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
        <div>
            <div className="newCus">
                
                <form>
                    <label>First Name: </label>
                    <input 
                        type="text" 
                        name="fnamein"
                        onChange={(event) => {setFirstName(event.target.value);}}
                    />
                    <br></br>

                    <label>Last Name: </label>
                    <input 
                        type="text" 
                        name="lnamein" 
                        onChange={(event) => {setLastName(event.target.value);}}
                    />
                    <br></br>
                    
                    <label>Date of Birth: </label>
                    <input 
                        type="text" 
                        name="dobin" 
                        onChange={(event) => {setDateOfBirth(event.target.value);}}
                    />
                    <br></br>

                    <label>Address:</label>
                    <input 
                        type="text" 
                        name="addressin" 
                        onChange={(event) => {setAddress(event.target.value);}}
                    />
                    <br></br>
                    
                    <label>SSN:</label>
                    <input 
                        type="text" 
                        name="ssnin" 
                        onChange={(event) => {setSsn(event.target.value);}}
                    />
                    <br></br>
                    <br></br>
                    
                    <div>
                        <button onClick={submitCustomer}>ADD CUSTOMER</button>
                    </div>
                </form>
                
            </div>
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