import React from "react";
import { useState } from "react";
// importing Container
import Container from "react-bootstrap/Container";
// importing Card
import Card from "react-bootstrap/Card";
// importing Columns
import Col from "react-bootstrap/Col";
// importing Row
import Row from "react-bootstrap/Row";
// import Button feature 
import Form from "react-bootstrap/Form";
// importing Button feature 
import Button from "react-bootstrap/Button";


export const LoginView = ({ onLoggedIn }) => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
//  validation of user login
 const handleSubmit = (event) =>{ 
    //prevents default behavior of the form which is to reload the entire page
    event.preventDefault();
    const data = {
        Username: username,
        Password: password
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
        <Container>
            <Row>
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                            <Card.Title>Pleas Login</Card.Title>
                            <Form className="movies-couch" onSubmit={handleSubmit}>
                                <Form.Group controlId="formUsername">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control 
                                type="text"
                                value={username}
                                onChange= {(e) => setUsername(e.target.value)}
                                minLength="3"
                                required
                                />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control 
                                type="password"
                                value={password}
                                onChange= {(e) => setPassword(e.target.value)}
                                minLength="5" 
                                required
                                />
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>  
                            </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
};