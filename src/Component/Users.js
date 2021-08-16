import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Users = ({user}) => {
    return (
        <div>
            <Card style={{ width: '18rem', minHeight:"300px", margin: "5px" }}>
  <Card.Img variant="top" src="https://lledogrupo.com/wp-content/uploads/2018/04/user-img-1.jpg" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Title>{user.username}</Card.Title>
    <Card.Text> {user.email}</Card.Text>
    <Button variant="primary">
   <Link to={`/users/${user.id}`} style={{ color:'black'}}>User Details </Link>   
  
    </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Users;
