//importing PropTypes library
import PropTypes from "prop-types";
// importing Button and card features from bootstrap
import { Button, Card } from "react-bootstrap";
// Movie card function component
export const MovieCard = ({ movie, onMovieClick}) => {
    return (
    <Card className="w-80">
      <Card.Img variant="top" src={movie.ImageURL}/> 
      <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Director}, {movie.Genre}</Card.Text>
          <Button onClick={() => onMovieClick(movie)} variant="link">
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
    Image: PropTypes.string,
    Director: PropTypes.shape ({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birthyear: PropTypes.date,
      Deathyear: PropTypes.date
      }),
    Genre: PropTypes.shape ({
      Name: PropTypes.string,
      Description: PropTypes.string
    })
  }),
  onMovieClick: PropTypes.func.isRequired
};
