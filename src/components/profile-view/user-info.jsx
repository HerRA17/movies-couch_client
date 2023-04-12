import React from "react";
import { Button, Card, Container } from "react-bootstrap";

function UserInfo({ user }) {
    console.log(UserInfo);
    return(
        <>
            <h2>Your Profile:</h2>
                <Card>
                    <Card.Body className="profile-view">
                        <>
                            <h3>Username:</h3>
                            <p>{user.Username}</p>
                            <br />
                            {/* <h3>Password:</h3> 
                            <p>{user.Password}</p> */}
                            <br />
                            <h3>Email:</h3>
                            <p>{user.Email}</p>
                            <br />
                            <h3>Birthday:</h3>
                            <p>{user.Birthday}</p>
                            <br />
                        </>
                    </Card.Body>
                </Card>
        </>
    )
}

export { UserInfo }; 