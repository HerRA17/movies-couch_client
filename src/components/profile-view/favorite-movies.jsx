import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Col from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

function FavoriteMovies({movies, removeFavMovie, user }) {
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
                <Col className="mt-4" id={movie._id}>
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