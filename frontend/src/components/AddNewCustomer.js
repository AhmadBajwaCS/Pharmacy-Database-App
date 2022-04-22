import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import './AddNewCustomer.css';

function AddNewCustomer(props) {

    const [postList,setPostList]=useState([]);

    let history = useHistory();

    useEffect(
        ()=>{Axios.get("http://localhost:3002/api/get").then((data)=>{setPostList(data.data)});},
        [])

    return (
        <div className="newCus">
            {postList.map((val,key)=>{
                return (
                <div className="Post">
                    <h2>Person</h2>
                    <p>{val.FirstName}</p>
                    <p>{val.LastName}</p>
                </div>
                )  
            })}
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