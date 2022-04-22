import React from 'react';
import './HomePageButtons.css';

function HomePageButtons(props) {
    return (
        <div className="homeDiv">
        <h1>&emsp;  Pharmacy DB  &emsp;  </h1>
                <button className="button">Search the database</button>
                <button className="button">Log prescription</button>
                <button className="button">Track active prescriptions</button>
                <button className="button">View drug inventory</button>
                <button className="button">Add new customer</button>
                <button className="button">Quit</button>
        </div>
    );
}

export default HomePageButtons;