//importing PropTypes library
import PropTypes from "prop-types";
// importing Button and card features from bootstrap
import { Button, Card } from "react-bootstrap";
// Movie card function component
export const MovieCard = ({ movie, onMovieClick}) => {
    return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.ImageURL}/> 
      <Card.Body className="movie-card">
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
          <br />
          {movie.Description}
          <br /><br />
          Director:{' '+ movie.Director.Name}
          <br />
          Genre:{' '+ movie.Genre.Name} 
          </Card.Text>
          <br />
          <Button className="movie-card-button" onClick={() => onMovieClick(movie)} variant="button" style={{ cursor: "pointer"}} active>
              Open
          </Button>
          </Card.Body>
  </Card>
    );
};

// defined props constrains for Movie Card
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.objectOf({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birthdate: PropTypes.string,
      Deathdate: PropTypes.string
      }),
    Genre: PropTypes.objectOf({
      Name: PropTypes.string,
      Description: PropTypes.string
    })  //need further examples-> help
  }),
  onMovieClick: PropTypes.func.isRequired
};
