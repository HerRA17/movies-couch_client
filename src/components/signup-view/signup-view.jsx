import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

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
                navigate("/login");
                return response.json();
            } else if (response.status(400)) {
                alert(`Signup failed: Username already exists`)
            } else if (response.status(401)) {
                alert("Signup failed: You are not authorized to access")
            } else {
                throw new Error("An unknown error occurred");
            }
        })
        .then((data) => {
            if (!data) {
                alert("Sign up could not be completed, please try again.");
                navigate("/signup");
            }
        })
        .catch(e => {
            console.log(e);
            alert("Signup failed: Username already exists");
          });
    };
    // signup form with submit button
    return (
        // handleSubmit is the callback of onSubmit, tells the login API to validate user & password
        <Container fluid className="p-0 min-vh-100 d-flex flex-column mt-5">
            <Row className="flex-grow-2 justify-content-center align-items-center">
                <Col >
                    <Card className="card mb-4 w-80 h-100">
                        <Card.Body className="signup-view" >
                        <Card.Title className="mb-4" style={{color: "black"}}>Sign up</Card.Title>
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
                                    <Form.Control type="email"
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
                                <Button variant="dark" type="submit">Sign up</Button>
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
