import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Container fluid className="p-0 min-vh-100 d-flex flex-column">
            <Row className="flex-grow-2 justify-content-center align-items-center">
                <Col >
                    <Card className="card mb-4 w-80 h-100">
                        <Card.Body className="movies-couch" >
                        <Card.Title className="mb-4">Pleas Login</Card.Title>
                            <Form className="mb-4" onSubmit={handleSubmit}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        minLength="3"
                                    />
                                </Form.Group>
                                <br/>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength="5" />
                                </Form.Group>
                                <br/>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </Form.Group>
                                <br/>
                                <Form.Group controlId="Birthday">
                                    <Form.Label>Birthday:</Form.Label>
                                    <Form.Control type="date"
                                        value={birthday}
                                        onChange={(e) => setBirthday(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <br/>
                                <Button variant="warning" type="submit">Submit</Button>
                            </Form>
                            <br/>
                            <Link to="/login" className="link_to">Already registered? You will be redirected to the login</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};
