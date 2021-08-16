import React from 'react'
import { Spinner,Card,ListGroup } from 'react-bootstrap'

const OneUser = ({user, loaduser}) => {
    return (
        <div>
            {
                loaduser?(
                    <Spinner   animation="border" />
                    
                ):(
                    <Card style={{ width: '18rem',marginLeft:'40%'}}>
  <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ISCwWMuZRuNjBneCQ-ra5QHaFK?pid=ImgDet&rs=1" />
  <Card.Body>
    <Card.Title>Name:{user.name}</Card.Title>
    <Card.Text>email:{user.email}</Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item>phone:{user.phone}</ListGroup.Item>
    <ListGroup.Item>website:{user.website}</ListGroup.Item>
  </ListGroup>
  </Card.Body>
</Card>
                )
            }
        </div>
    )
}

export default OneUser;
