import React from 'react';

function HomePageButtons(props) {
    return (
        <body className="App-body">
        <h1>Pharmacy DB  &emsp;  &ensp;    </h1>
        <button className="button">Search the database</button>
        <button className="button">Log prescription</button>
        <button className="button">Track active prescriptions</button>
        <button className="button">View drug inventory</button>
        <button className="button">Add new customer</button>
        <button className="button">Quit</button>
        </body>
    );
}

export default HomePageButtons;