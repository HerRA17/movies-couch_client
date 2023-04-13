import  {React, useEffect, useState} from "react"; 
// import Form from "react-bootstrap/Form";
import { Col, Row}  from "react-bootstrap";
import { Container } from "react-bootstrap";
import { toast } from "react-bootstrap";
import PropTypes from "prop-types";

import { FavoriteMovies } from "./favorite-movies";
import { UserInfo }  from "./user-info";
import { UpdateView } from "./update-user";
import { DeleteUser } from "./delete-user";



    export const TestProfile= ({user, setUser, movies, token, updateUser}) => {
        
        const [myUser, setMyUser] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [birthday, setBirthday] = useState("");

        //get users 
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`,
        {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                if (response.ok) {
                    console.log("User data retrieved")
                } else {
                    console.log("User data coudl not be retrieved.")
                }
                setMyUser(response.data);
                console.log(response);
        })
            .catch((error) => {
            console.error("An error ocurred" + error);
            });
    }, []);

    // let moviesId = movies_.id -> ?
    // Fav-movies 
    const favoriteMovies = movies.filter((movie) => FavoriteMovies.includes(movie._id))     

    // remove-fav_Movies
     removeFavMovie = async (movies) => {
       const user = localStorage.getItem("user");
       console.log(user);
       const token = localStorage.getItem("token");
       console.log(token);
       fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/movies/${movies._id}`,
       {
         method: "DELETE",
        header: {Authorization: `Bearer ${token}`}}
       ) 
       .then((response) => {
           console.log(response);
           toast.success(`The Movie: ${movies._id} was removed from Favorite List`)
       })
       .catch(function (error) {
           console.error(" An error ocurred" +error);
       })
    }

console.log(useEffect);
console.log(updateUser);
    return (
        <Container className="profile-view">
                <Row className="d-flex justify-content-center p-4">
                    <Col >
                        <UserInfo user={user}/>
                    </Col>
                    </Row> 
                   <Row className="d-flex justify-content-center p-4">
                        <Col >
                            <UpdateView user={user} updateUser={updateUser}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FavoriteMovies />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center p-4">
                        <Col>
                            <DeleteUser user={user}/>
                        </Col>
                    </Row>
            </Container>
        ); 
};



TestProfile.propTypes = {
    user: PropTypes.object,
    setUser: PropTypes.string, 
    movies: PropTypes.object, 
    token: PropTypes.number,
    updateUser: PropTypes.func,
    removeFavMovie: PropTypes.func
}
