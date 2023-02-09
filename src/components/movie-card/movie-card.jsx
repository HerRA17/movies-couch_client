//importing PropTypes library
import PropTypes from "prop-types";
// Movie card function component
export const MovieCard = ({ movie, onMovieClick}) => {
    return (
    <div 
        onClick={() => {
        onMovieClick(movie);
    }}
      >
       {movie.title}
      </div>
    );
};
// defined props comstrains for Movie Card
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.shape ({
      name: PropTypes.string,
      Bio: PropTypes.string,
      Birthyear: PropTypes.date,
      Deathyear: PropTypes.date
      }),
    genre: PropTypes.shape ({
      name: PropTypes.string,
      description: PropTypes.string
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};