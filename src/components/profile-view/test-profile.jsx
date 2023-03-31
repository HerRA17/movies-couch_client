import  {React, useEffect, useState} from "react"; 
import Form from "react-bootstrap/Form";
import { Col, ListGroup, Row}  from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
// import { toast } from "react-bootstrap"; //primary, success, danger, warning
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
// import FavoriteMovies from "./favorite-movies";
import { PropTypes } from "react-bootstrap";
import { toast } from "react-toastify";


    export const TestProfile= ({user, setUser, movies, token, onLoggedOut}) => {
        
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [birthday, setBirthday] = useState("");

        //get users 
    useEffect(() => {
        fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`,
        {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        })
        // conditional and check status- response.ok else trhow error
        .then((response) => {
            // response.json())
        console.log(response);
        if (response.ok) {
            toast.success("User data retrieved")
        } else {
            toast.danger("User data coudl not be retrieved.")
        }
            // .then((data) => {
            // console.log(data);
            //   setFavoriteMovies(data.favoriteMovies) 
        })
        .catch((error) => {
            console.error("An error ocurred" + error);
            // alert("error");
            // toast.danger("error");
        });
    }, [user.username, token]);
    
        //    update user function
        const updateUser = function (){
            function handleSubmit(event) {
                event.preventDefault();
                const token = localStorage.getItem("token");
                const data = {
                    Username: username,
                    Password: password,
                    Email: email,
                    Birthday: birthday
                };
                fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`,
                    data,
                    {
                        method: "PUT",
                        headers: { Authorization: `Bearer ${token}` }
                    }
                )
                    .then((response) => {
                        console.log(response);
                        if (response.ok) {
                            alert("Profile updated!");
                        } else {
                            alert("Update Failed!");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            const handleUpdate = (e) => {
                e.preventDefault();
                setUsername(e.target.value);
                setPassword(e.target.value);
                setEmail(e.target.value);
                setBirthday(e.target.value);
            }   
        }
        
    // delete user
    // const deleteUser = function () {
    //     fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`, 
    //     {
    //         method: "DELETE",
    //         headers: {Authorization: `Bearer ${token}`}})
    //     .then(function (response) {
    //         console.log(response);
    //         if (response.status === 401) {
    //             throw new Error("Sorry, you're not authorized to access this resource.");
    //         } else if( response.status === 404) {
    //             throw new Error("User was not found.")
    //         } else if(response.ok) {
    //             toast.success(`You succesfully deleted the account with the username ${user.Username}.`);
    //             onLoggedOut();
    //         }
    //     })
    //     .catch(function (error) {
    //         if (error.message) {
    //             toast.error(error.message);
    //         } else {
    //             toast.error("An error ocurred while trying to delete. Please try again later.");
    //         }
    //         console.error("An error occured: " + error)
    //     });
    // };
    // let moviesId = movies_.id
    // Fav-movies 
    // const favoriteMovies = movies.filter((movie) => favoriteMovies.includes(movie._id)) //change m._id
    // remove-fav_Movies
//   removeFavMovie = async (movies) =>{
//     const user = localStorage.getItem("user");
//     console.log(user);
//     const token = localStorage.getItem("token");
//     console.log(token);
//     fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movies._id}`,
//     {
//       method: "DELETE",
//      header: {Authorization: `Bearer ${token}`}}
//     ) 
//     .then((response) => {
//         console.log(response);
//         toast.success(`The Movie: ${movies._id} was removed from Favorite List`)
//     })
//     .catch(function (error) {
//         console.error(" An error ocurred" +error);
//     })
//  }


    return (
        <Container className="profile-view">
                <Row className="d-flex justify-content-center p-4">
                    <Col >
                        <Card>
                        <Card.Title>Profile Information</Card.Title>
                            <Card.Body className="profile-view">
                            <>
                             <h3>Username:</h3>
                             <p >{user.Username}</p>
                             <br/>
                             {/* <h3>Password:</h3>
                             <p >{setPassword}</p>
                             <br/> */}
                             <h3>Email:</h3>
                             <p >{user.Email}</p>
                             <br/>
                             <h3 >Birthday:</h3>
                             <p >{user.Birthday.slice(0,10)}</p>
                             <br/>
                            </>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row> 
                   <Row className="d-flex justify-content-center p-4">
                        <Col >
                            <Card>
                                <Card.Title>Update Form</Card.Title>
                                <Card.Body className="form-profile">
                                    <Form /*onSubmit={handleSubmit}*/>
                                            <Form.Group>
                                            <Form.Label aria-label="username"> Username:</Form.Label>
                                            <Form.Control 
                                            type="text"
                                            name="username"
                                            className=""
                                            value={user.Username}
                                            onChange={(e) => handleUpdate(e)}
                                            // aria-required="true"
                                            />
                                            </Form.Group>
                                            <br/>
                                           <Form.Group >   
                                            <Form.Label aria-label="password"> Password:</Form.Label>
                                                
                                                <Form.Control
                                                type="password"
                                                name="password"
                                                className=""
                                                // value={user.Password}
                                                onChange={(e) => handleUpdate(e)}
                                                 />
                                            
                                            </Form.Group> 
                                            <br />
                                            <Form.Group>  
                                            <Form.Label aria-label="email">Email:</Form.Label>
                                                <Form.Group 
                                                type="email"
                                                name="email"
                                                className=""
                                                value={user.Email}
                                                onChange={(e) => handleUpdate(e)}  
                                                />
                                            
                                            </Form.Group>   
                                            <br />
                                            <Form.Group>
                                            <Form.Label aria-label="birthday"> Birthday:</Form.Label> 
                                                <Form.Control 
                                                type="date" 
                                                name="birthday"
                                                className=""
                                                value={user.Birthday}
                                                onChange={(e) => handleUpdate(e)}
                                                 />
                                            </Form.Group>
                                            <br />
                                            <ListGroup.Item>
                                            <Button  type="submit" className="updateButton" /*onChange={()=> updateUser()}*/>Update User</Button>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                            <Button type="submit" className="deleteButton" /*onChange={()=> deleteUser()} */ >Delete User</Button>
                                            </ListGroup.Item>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* <FavoriteMovies /> */}
                        {/* <Button onClick={removeFavMovie} className="movie-card-button">Remove from Favorite List</Button> */}
                        </Col>
                    </Row>
            </Container>
        ); 
};

export default TestProfile;
// TestProfile.propTypes = {
//     user: PropTypes.object,
//     // setUser: PropTypes.instanceOf(user), 
//     movies: PropTypes.object, 
//     token: PropTypes.number,
//     onLoggedOut: PropTypes.func
// }
