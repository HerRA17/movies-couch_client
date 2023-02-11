import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view"; 
// import {LoginView} from "../"

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user,setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [movies, setMovies] = useState([]);
    // set default state to null(default-state)
    const [selectedMovie, setSelectedMovie] = useState(null);
    export const SignupView = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [birthday, setBirthday] = useState("");
        const handleSubmit = (event) => {};
    }

useEffect(() => {
    // if(!token) {
    //     return;
    // }

    fetch("https://movies-couch-api-herra17.vercel.app/") //, {
        // headers: {Authorization: `Bearer ${token}`}
        // })
    .then((response) => response.json())
    // .then((movies) => { setMovies(movies); })
        })
    .then((data) => {
        // console.log(data); 
        const moviesFromApi = data.docs.maps((doc) => {
            return {
                id: doc.key,
                title: doc.title,
                image: `${doc.cover}`,
                director: doc.director_name
            };
        });
        setMovies(moviesFromApi); 
    });
}, [/*token */ ];
 
    // if (!user) {
    //     return <LoginView onLoggedIn={(user, token) => {
    //  setUser(user);
    //  setToken(token); 
    // }} />
    // or
    // <Signup />
    // </>
    // }
    
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
    /*  <form onSubmit={handleSubmit}>
            <label> 
            Username:
            <input
            type="text" value={username} onChange={(e) => setUsername(e.target.value)}
            required minLength="3"
            />
            </label>
            <label>
            Password:
            <input 
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                required 
                />
            </label>
            <label> 
            Email:
            <input 
            type="email" value={email} onChange{(e) setEmail(e.target.value)}
            required />
            </label>
            <label>
            Birthday: 
            <input 
            type="date" value={birthday} onChange{(e) => setBirthday(e.target.value) 
                required /> 
            </label>
            <button type="submit">Submit</button>
        </form>
            */
           );
        // <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
    // };
        