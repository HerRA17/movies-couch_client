import React from "react";
import { useState } from "react";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";


export const UpdateView = ({ user, updateUser}) => {
    const token = localStorage.getItem("token");

    const [username, setUsername] = useState(user.Username);
    const [password, setPassword] = useState(user.Password);
    const [email, setEmail] = useState(user.Email);
    const [birthday, setBirthday] = useState(user.Birthday);

    const handleSubmit = function (event){
    event.preventDefault();
    
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
        };

        fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`,
        {
            method:"PUT",
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
         })
            .then((response) => {
                if (response.ok) {
                toast.success("Changes saved.");
                } else {
                toast.danger("Ops, something went wrong");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    console.log(UpdateView);

    return (

        <Row className="mt-2">
            <Col>
                <Card> 
                    <Card.Body className="form-profile">
                        <Card.Title>Profile Update:</Card.Title>
                        <Card.Text></Card.Text>
                        <ListGroup>
                            <form onSubmit={handleSubmit}>
                                <ListGroup.Item>
                                    <label>
                                        Username:
                                        <input 
                                        type="text"
                                        name="username"
                                        className="input-fields"
                                        value={username}
                                        placeholder={user.Username}
                                        onChange={e => setUsername(e.target.value) }
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br/>
                                <ListGroup.Item>
                                    <label>
                                        Password:
                                        <input 
                                        type="password"
                                        name="password"
                                        className="input-fields"
                                        value={password}
                                        placeholder={user.Password}
                                        onChange={e => setPassword(e.target.value) }
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br/>
                                <ListGroup.Item>
                                    <label>
                                        Email:
                                        <input 
                                        type="email"
                                        name="email"
                                        className="input-fields"
                                        value={email}
                                        placeholder={user.Email}
                                        onChange={e => setEmail(e.target.value) }
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br/>
                                <br/>
                                <ListGroup.Item>
                                    <label>
                                        Birthday:
                                        <input 
                                        type="date"
                                        name="birthday"
                                        className="input-fields"
                                        value={birthday}
                                        placeholder={user.Birthday}
                                        onChange={e => setBirthday(e.target.value) }
                                        />
                                    </label>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item>
                                    <Button variant="primary" type="submit" className="mt-3">
                                        Update User
                                    </Button>
                                </ListGroup.Item>
                            </form>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

UpdateView.propTypes = {
user: PropTypes.object,
updateUser: PropTypes.func
}