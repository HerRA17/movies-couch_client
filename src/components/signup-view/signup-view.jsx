import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; 

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    // validation of signup view
    const handleSubmit = (event) => {
        event.preventDefault();
    const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

    fetch("https://movies-couch-api.vercel.app/users", {
         method: "POST",
         body: JSON.stringify(data),         
         headers: {
            "Content-Type": "application/json"
        }                 
        }).then((response) => {
         if (response.ok) {
            alert("Signup successful");
             window.location.reload();
             } else {
                 alert("Signup failed")
                } 
            });
         };
    // signup form with submit button
        return (
    // handleSubmit is the callback of onSubmit, tells the login API to validate user & password
    <Container>
        <Row>
            <p className="movies-couch">Logo</p>
        </Row>
        <Row>
            <Col>
                <Card>
                    <Card.Body className="movies-couch">
                        <Form className="movies-couch" onSubmit={handleSubmit} >
                                    <Form.Group controlId="formUsername">
                                        <Form.Label aria-label="username">Username:</Form.Label>
                                    <Form.Control type="text" 
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        aria-required="true"
                                        minLength="3"
                                         />
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label aria-label="password">Password:</Form.Label>
                                        <Form.Control type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            aria-required="true" 
                                            minLength="5"
                                             />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label aria-label="email">Email:</Form.Label>
                                        <Form.Control type="text" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            aria-required="true"
                                             />
                                    </Form.Group>
                                    <Form.Group controlId="Birthday">
                                        <Form.Label aria-label="birthday">Birthday:</Form.Label>
                                        <Form.Control type="date"
                                            value={birthday}
                                            onChange={(e) => setBirthday(e.target.value)}
                                            aria-required="true" 
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" aria-label="submit">Submit</Button> 
                        </Form> 
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

    );
};
