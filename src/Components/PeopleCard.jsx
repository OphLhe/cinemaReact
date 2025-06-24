import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const  PeopleCard= ({peopleC}) => {
    return <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + peopleC.profile_path}/>
      <Card.Body>
        <Card.Title>{peopleC.name}</Card.Title>
        <Card.Text>
          {peopleC.known_for.map((movie) =>{
            return <li key = {movie.id}>{movie.title}</li>
          })} 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>;
}
 
export default PeopleCard;