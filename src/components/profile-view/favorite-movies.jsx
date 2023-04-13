import React from "react";
import Col from "react-bootstrap";
import PropTypes from "prop-types";
import { MovieCard } from "../movie-card/movie-card";

function FavoriteMovies({ movies, removeFavMovie, user }) {
    let favoriteMovies = movies.filter(function (movie) {
        return user.FavoriteMovies.include(movie._id);
    }); 
    let printFavoriteMovies;
    
    if (favoriteMovies.length === 0) {
        printFavoriteMovies = (
            <Col className="mt-4">You have not added movies yet.</Col>
        );
    } else {
        printFavoriteMovies = favoriteMovies.map(function(movie) {
            return (
                <Col className="mt-4" _id={movie._id}>
                    <MovieCard 
                        movie={movie}
                        removeFavMovie={removeFavMovie}/>
                </Col>
            )
        })
    }
    console.log(favoriteMovies);
    return (
        <div>
        {printFavoriteMovies}
        </div>
    )

} 

export { FavoriteMovies };

FavoriteMovies.propTypes = {
    user: PropTypes.object,
    movies: PropTypes.array,
    removeFavMovie: PropTypes.func,
    _id: PropTypes.string
}