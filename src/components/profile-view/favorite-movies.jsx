import React from "react";
import { Col } from "react-bootstrap";
import PropTypes  from "prop-types";
import { MovieCard } from "../movie-card/movie-card";

function FavoriteMovies({ movies, removeFavMovie, user, updateUser }) {
    let favoriteMovies = movies.filter(function (movie) {
        return user.FavoriteMovies.includes(movie._id);
    }); 
    let printFavoriteMovies;
    
    if (favoriteMovies.length === 0) {
        printFavoriteMovies = (
            <Col>You have not added movies yet.</Col>
        );
    } else {
        printFavoriteMovies = favoriteMovies.map(function(movie) {
            return (
                <Col key={movie._id} _id={movie._id} >
                        <MovieCard 
                        movie={movie}
                        user={user}
                        removeFavMovie={removeFavMovie}
                        updateUser={updateUser}/>
                </Col>
            )
        })
    }
    
    return (
        <div className="favorite-list" >
            {printFavoriteMovies}
        </div>
    )

} 

export { FavoriteMovies };

FavoriteMovies.propTypes = {
    user: PropTypes.object,
    movies: PropTypes.array,
    removeFavMovie: PropTypes.func,
    _id: PropTypes.string,
    updateUser: PropTypes.func, 
}
