import  {React, useEffect, useState} from "react"; 
// import Form from "react-bootstrap/Form";
import { Col, Row}  from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import FavoriteMovies from "./favorite-movies";


    export const TestProfile= ({user, setUser, movies, token}) => {
        const [username, setUsername] = useState();
        const [password, setPassword] = useState();
        const [email, setEmail] = useState();
        const [birthday, setBirthday] = useState();
        //    update user function
            const handleSubmit= event => {
                event.preventDefault();
                const token = localStorage.getItem("token");
                const data = {
                    Username: username,
                    Password: password,
                    Email: email,
                    Birthday: birthday
                }
                axios.put(`https://movies-couch-api.vercel.app/users/${user.Username}`,
                data,
                {headers: {Authorization: `Bearer ${token}`}}
                )
                .then((response) =>{
                    console.log(response.data);
                    alert("Profile updated!");
                    // window.open(`/profile`, "_self");
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    //get users 
    useEffect(() =>{
        const token = localStorage.getItem("token");
        axios.get(`https://movies-couch-api.vercel.app/users/${user.Username}`,
        {headers: {Authorization: `Bearer ${token}`}})
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [user.Username, token]);
    // Fav-movies 
    const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id)) 
    // remove-fav_Movies
     removeFavMovie = async (movies) =>{
        const user = localStorage.getItem("user");
        console.log(user);
        const token = localStorage.getItem("token");
        console.log(token);
        axios.delete(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movies._id}`,
        {header: {Authorization: `Bearer ${token}`}}
        ) 
        .then((response) => {
            console.log(response);
            alert(`The Movie: ${movies._id} was removed from Favorite List`)
        })
        .catch(function (error) {
            console.log(error);
        })
     }
    return (
        <Container className="profile-view">
                <Row className="d-flex justify-content-center p-4">
                    <Col >
                        <Card>
                            <Card.Body className="profile-view">
                            <>
                             <h3>Username:</h3>
                             <p >{user.Username}</p>
                             <br/>
                             <h3>Password:</h3>
                             <p >{user.Password}</p>
                             <br/>
                             <h3>Email:</h3>
                             <p >{user.Email}</p>
                             <br/>
                             <h3 >Birthday:</h3>
                             <p >{user.Birthday}</p>
                             <br/>
                            </>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row> 
                   <Row className="d-flex justify-content-center p-4">
                        <Col >
                            <Card>
                                <Card.Body className="form-profile">
                                    <Card.Title>Profile Information</Card.Title>
                                    <Card.Text></Card.Text>
                                        <form onSubmit={handleSubmit}>
                                        <label>
                                            Username:
                                            <input 
                                            type="text"
                                            name="username"
                                            // value={user.Username}
                                            onChange={(e) => setUsername(e.target.value)}

                                             /> 
                                        </label>
                                        <br />
                                        <label>
                                            Password:
                                            <input 
                                            type="password"
                                            name="password"
                                            // value={user.Password}
                                            onChange={(e) => setPassword(e.target.value)}
                                             />
                                        </label>
                                        <br />
                                        <label>
                                            Email:
                                            <input 
                                            type="email"
                                            name="email"
                                            // value={user.Email}
                                            onChange={(e) => setEmail(e.target.value)}  />
                                        </label>
                                        <br />
                                        <label>
                                            Birthday:
                                            <input 
                                            type="date" 
                                            name="birthday"
                                            // value={user.Birthday}
                                            onChange={(e) => setBirthday(e.target.value)}  />
                                        </label>
                                        <br />
                                        <button  type="submit" >Update User</button>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* <FavoriteMovies /> */}
                        </Col>
                    </Row>
            </Container>
        ); 
};