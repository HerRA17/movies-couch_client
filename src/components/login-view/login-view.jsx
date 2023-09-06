import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


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
        console.log(e)
    });
 };
//  login form with submit button
    return (
        // handle submit is the callback of onSubmit, tells the login API to validate user & password
        <Container fluid className="p-0 min-vh-100 d-flex flex-column">
            <Row className="flex-grow-2 justify-content-center align-items-center">
                <Col className="">
                    <Card className="card mb-4 w-80 h-100" >
                            <Card.Body className="movies-couch">
                            <Card.Title className="mb-4">Pleas Login</Card.Title>
                            <Form className="mb-4" onSubmit={handleSubmit}>
                                <Form.Group controlId="formUsername">
                                <Form.Label>User:</Form.Label>
                                <Form.Control 
                                type="text"
                                value={username}
                                onChange= {(e) => setUsername(e.target.value)}
                                minLength="3"
                                required
                                />
                                </Form.Group>
                                <br/>
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
                                <br/>
                                <Button variant="warning" type="submit">Submit</Button>  
                            </Form>
                            <br/>
                            <Link to="/signup" className="link_to">Have you already sign up? If not click here!</Link>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginView;