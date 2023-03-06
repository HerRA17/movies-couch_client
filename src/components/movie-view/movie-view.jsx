// importing scss file
import "./movie-view.scss";
// importing Card component
import { Button, Card } from "react-bootstrap";
export const MovieView = ({ movie, onBackClick }) => {
    
return( 
<Card className="movie-view">
    <Card.Img className="w-80" src={movie.ImageURL} />
    <Card.Body className="movie-view">
        <Card.Title>{movie.Title}</Card.Title>
        <br />
        <Card.Text> Director:      
         {' ' + movie.Director.Name} 
        <br /> <br />
        About: {' ' +movie.Director.Bio}
        <br /> <br />Birthdate: 
        {' ' + movie.Director.Birthdate}
        <br /> <br />Genre: 
        {' ' + movie.Genre.Name}
        {/* <br /> <br />Description:
        {movie.Genre.Description}  */}
        </Card.Text>
        <Button onClick={onBackClick} className="back-button" variant="button" style={{ cursor: "pointer"}} active>
            Back
        </Button>
    </Card.Body>
</Card> 

    );
};