import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const  PeopleCard= ({peopleC}) => {
    return <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + peopleC.profile_path}/>
      <Card.Body>
        <Card.Title>{peopleC.name}</Card.Title>
        <Card.Text className='text-truncate-bis'>
          {peopleC.known_for.map((movie) =>{
            return <li key = {movie.id}>{movie.title}</li>
          })} 
        </Card.Text>
        <Link to = {`/details/people/${peopleC.id}`}>
        <Button variant="primary">More details</Button>
        </Link>
      </Card.Body>
    </Card>
    </>;
}
 
export default PeopleCard;