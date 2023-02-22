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
       {movie.Title}
      </div>
    );
};
//Similar-Movie Component:
// similarMovies.propTypes = {
//   movie: PropTypes.shape({
//     Title: PropTypes.string.isRequired,
//     Image: PropTypes.string.isRequired,
//     Director: PropTypes.shape ({
//       Name: PropTypes.string,
//       Bio: PropTypes.string,
//       Birthyear: PropTypes.date,
//       Deathyear: PropTypes.date
//       }),
//     Genre: PropTypes.shape ({
//       Name: PropTypes.string,
//       Description: PropTypes.string
//     })
//   }).isRequired,
//   onMovieClick: PropTypes.func.isRequired
// }
// }
// validation of data types between prop & component
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
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
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
