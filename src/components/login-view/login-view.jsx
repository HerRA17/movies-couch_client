import React from "react";
import { useState } from "react";


export const LoginView = ({ onLoggedIn }) => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
//  validation of user login
 const handleSubmit = (event) =>{ 
    //prevents default behavior of the form which is to reload the entire page
    event.preventDefault();
    const data = {
        access: username,
        secret: password,
        };
    fetch("https://movies-couch-api.vercel.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)        
        })
     .then((response) => response.json())
     .then((data)  => {
        console.log("Login response: ", data);
        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user , data.token);
        } else {
            alert("No such user");
        }
    })
    .catch((e) => {
        alert("Something went wrong!");
    });
 };
//  login form with submit button
    return (
        // handle submit is the callback of onSubmit, tells the login API to validate user & password
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type= "text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength="5"
                required />
            </label>
            <label> 
                Password:
                <input type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required />
            </label>
        </form>
    );
};