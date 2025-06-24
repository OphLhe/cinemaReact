import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const  MovieCard= ({movieC}) => {
    return <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + movieC.poster_path} />
      <Card.Body>
        <Card.Title>{movieC.title}</Card.Title>
        <Card.Text className='text-truncate-bis'>
          {movieC.release_date} - {movieC.overview}
        </Card.Text>
        <Link to ={`/details/${movieC.id}`}>
        <Button variant="primary">More details</Button>
        </Link>
      </Card.Body>
    </Card>
    </>;
} 
 
export default MovieCard;