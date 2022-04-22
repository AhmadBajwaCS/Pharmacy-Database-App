import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

function AddNewCustomer(props) {

    const [postList,setPostList]=useState([]);

    let history = useHistory();

    useEffect(
        ()=>{Axios.get("http://localhost:3002/api/get").then((data)=>{setPostList(data.data)});},
        [])

    return (
        <div>
            {postList.map((val,key)=>{
                return (
                <div className="Post">
                    <h2>Person</h2>
                    <p>{val.FirstName}</p>
                    <p>{val.LastName}</p>
                </div>
                )  
            })}
        </div>
    );
}

export default AddNewCustomer;