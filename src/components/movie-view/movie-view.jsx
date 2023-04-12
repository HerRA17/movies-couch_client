import { React, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link, Redirect } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies, favoriteMovies, addFavMovie, token }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m._id === movieId);
    
    if (!movie) {
        // if movie is not found return to homepage
        return <Redirect to="/" />;
    }
    
return( 
    <Card className="movie-view">
        <Card.Img className="w-80" src={movie.ImageURL} alt="movie-poster"/>
        <Card.Body className="movie-view">
            <Card.Title>{movie.Title}</Card.Title>
            <br />
            <Card.Text> Director:      
             {` + ${movie.Director.Name}`} 
            <br /> <br />
            About: {` + ${movie.Director.Bio}`}
            <br /> <br />Birthdate: 
            {` + ${movie.Director.Birthdate}` }
            <br /> <br />Genre: 
            { ` + ${movie.Genre.Name}` }
            </Card.Text>
            <br />
            <Link to={"/"}>
            <Button className="back-button" active>Back</Button>
            <br/> <br/>
            </Link>
        </Card.Body>
    </Card> 
    );
};

  
MovieView.prototype = {
    movies: PropTypes.shape({
        _id: PropTypes.number,
        Title: PropTypes.string,
        ImageURL: PropTypes.string, 
        Description: PropTypes.string, 
        Director: PropTypes.string,
        Genre: PropTypes.string
    }),
    favoriteMovies: PropTypes.array,
    addFavMovie: PropTypes.func
}