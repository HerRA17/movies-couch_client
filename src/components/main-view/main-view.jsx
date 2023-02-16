import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view"; 


export const MainView = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);

useEffect(() => {
    try {
    fetch("https://movies-couch-api.vercel.app/movies")
    .then((response) => response.json())
    .then((data) => {
        console.log(data); 
        const moviesFromApi = data.docs.maps((doc) => {
            return {
                id: doc.key,
                title: doc.title,
                image: `${doc.cover}`,
                director: doc.director_name,
                genre: doc.genre_name
            };
        });
        setMovies(moviesFromApi); 
    });
}    catch(error) {
    console.log(error);
}
}), [ ];
 
if (selectedMovie) {
    // let similarMovies = movies.filter(checkMovies); allowing to look up similar movies based on title, director, genre 
    // function checkMovies(title, director) {} 
        return (
        <MovieView movie={selectedMovie} onMovieClick={() => setSelectedMovie(null)} />
        );
    }
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => {
            return  <MovieCard key={movie.id}  movie={movie} onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                }} />;
            })}
            </div>
        );
        };
        