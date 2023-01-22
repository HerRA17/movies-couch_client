import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view"; 

export const MainView = () => {
    const [movies, setMovies] = useState([]);
// { id: 1, title: "The Lord of The Rings: The Fellowship of the Ring",
// image:"https://www.imdb.com/title/tt0120737/mediaviewer/rm3360781312/?ref_=tt_ov_i"},
// { id: 2, title: "The Lord of The Rings: The Two Towers",
// image:"https://www.imdb.com/title/tt0167261/mediaviewer/rm2518119424/?ref_=tt_ov_i"},
// { id: 3, title: "The Lord of The Rings: The Return of The King",
// image:"https://www.imdb.com/title/tt0167260/mediaviewer/rm218277121/?ref_=tt_ov_i"},
// { id: 4, title: "Star Wars: Episode I- The Phantom Menace",
// image:"https://www.imdb.com/title/tt0120915/mediaviewer/rm3410261504/?ref_=tt_ov_i"},
// { id: 5, title: "Star Wars: Episode V- The Empire Strikes Back",
// image:"https://www.imdb.com/title/tt0080684/mediaviewer/rm3228333312/?ref_=tt_ov_i"}
useEffect(() => {
    fetch("https://movies-couch-api-git-main-herra17.vercel.app/")
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
    // set default state to null(default-state)
    const [selectedMovie, setSelectedMovie] = useState(null);
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
        