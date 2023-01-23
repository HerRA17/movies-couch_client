import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view"; 

export const MainView = () => {
    const [movies, setMovies] = useState([]);
       // set default state to null(default-state)
       const [selectedMovie, setSelectedMovie] = useState(null);

useEffect(() => {
    fetch("https://movies-couch-api-git-main-herra17.vercel.app/movies")
    .then((response) => response.json())
    .then((data) => {
        const moviesFromApi = data.docs.maps((doc) => {
            return {
                id: doc.key,
                title: doc.title,
                image: ``,
                director: doc.director_name
            };
        });
        setMovies(moviesFromApi); 
    });
}, []);
 
    if (selectedMovie) {
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
        