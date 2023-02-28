import '../css/style.css'
import Card from 'react-bootstrap/Card';

export const MyCard = ({service}) => {
    const {name, description, img} = service;

    return (
        <Card className='Card'>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}