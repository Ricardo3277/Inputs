import React, { useState } from "react";
import "./App.css";

function App() {

    const [people, setPeople] = useState([{
        name: "John",
        lastName: "Doe",
        age: 30,
        favouriteFood: "Pizza",
        favouriteColour: "Red",
        counter: 0,
    }, ]);

    const [name, setName] = useState("");
    const [lastName, setLastname] = useState("");

    return ( <
        div className = "App" >
        <
        div className = "Text1" >
        <
        h1 > Add New User < /h1> <
        /div> <
        input type = "text"
        name = "name"
        className = "Name"
        onChange = {
            (event) => {
                setName(event.target.value);
            }
        }
        /> <
        input type = "text"
        name = "lastName"
        className = "Lastname"
        onChange = {
            (event) => {
                setLastname(event.target.value);
            }
        }
        /> <
        button className = "btn"
        onClick = {
            () => {
                setPeople((current) => [{ name, lastName }, ...current]);
            }
        } >
        Add user <
        /button> <
        div >
        <
        ul className = "ul-vertical" > {
            people.map((person, idx) => ( <
                li id = { idx } > { `${person.name} ${person.lastName}` } < /li>
            ))
        } <
        /ul> <
        /div> <
        /div>
    );
}

export default App;