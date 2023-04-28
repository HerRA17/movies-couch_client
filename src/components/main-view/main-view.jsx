import { useState, useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Row   from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

import { ProfileView } from "../profile-view/profile-view";


// exporting Main view variabels
function MainView()  {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(storedUser? storedUser : null);
    

    // run whenever a user logs out
    const onLoggedOut= function () {
        setUser(null);
        setToken(null);
        localStorage.clear();
      }
    useEffect(() => {
        //verifying token-authentication to access request
        if(!token) {
            return;
        }                
    fetch("https://movies-couch-api.vercel.app/movies", {
      headers: {Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((movies) => {
        // console.log(movies); 
        const moviesFromApi = movies.map((movie) => {
            // console.log(Object.keys(movies))
            return {
                _id: movie._id,
                Title: movie.Title,
                ImageURL: movie.ImageURL, 
                Description: movie.Description, 
                Director: movie.Director,
                Genre: movie.Genre
            };    
        });
        // console.log(moviesFromApi)
        setMovies(moviesFromApi); 
        
    
    });
}, [token]);
// update User function
    const updateUser = (user) => {
        fetch(`https://movies-couch-api.vercel.app/users/${user.Username}/`, {
            headers: {Authorization: `Bearer ${token}` },
        })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data));
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log(error);
        })
    };

// console.log(storedUser);
// console.log(user);


return ( 
<BrowserRouter>
    <ThemeProvider  breakpoints={["xxl","xl","lg","md","sm","xs"]}
        minBreakpoint="xs">
        <NavigationBar
            user={user} 
            onLoggedOut={onLoggedOut}
         />
        <Row  className="main-view" >
            <Routes>
                <Route
                    path="/signup"
                    element={
                     <>
                        {user ? (
                        <Navigate to="/" />
                        ) : ( <Col md={5}>
                            <SignupView />
                        </Col>
                        )}
                     </>
                    }
                />
                <Route 
                    path="/login"
                    element={
                     <>
                        {user ? (
                            <Navigate to="/" />
                        ) : ( <Col md={5}>
                            <LoginView onLoggedIn={(user, token) => {setUser(user); setToken(token); }}  /> 
                            </Col>
                        )}
                     </>
                    }
                />
                <Route
                    path="/movies/:movieId"
                    element={
                     <>
                        {!user ? (
                        <Navigate to="/login" replace/>
                        ) : movies.length === 0 ? (
                            <div>The list is empty!</div>
                            ): ( <Col md={8}>
                            <MovieView movies={movies} 
                            FavoriteMovies={user.FavoriteMovies} />
                            </Col>
                        )}
                     </>
                    }
                />
                <Route
                    path="/"
                    element={
                     <>
                        {!user ? (
                            <Navigate to="/login" replace/>
                        ) : movies.length === 0 ? (
                            <div>The list is empty!</div>
                        ) : (
                         <>
                            {movies.map((movie) => (
                            <Col className="mb-5" key={movie._id} >
                                <MovieCard  movie={movie} user={user} updateUser={updateUser} />
                            </Col>
                            ))}
                        </>
                        )}
                     </>
              }
            />
            <Route
                path="/profile"
                element={
                    console.log(user) ||
                    <>
                    {user ? (
                        <Col className="mb-5" >
                            <ProfileView  user={user} setUser={setUser} movies={movies} updateUser={updateUser} key={user._id} />
                        </Col>
                    ) : (
                      <Navigate to="/login" />
                    )
                    }
                    </>
              }
            />
            </Routes>
        </Row>
    </ThemeProvider>
</BrowserRouter>
    );
}

export  { MainView };