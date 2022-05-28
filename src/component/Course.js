import React from 'react';
import { Card } from 'react-bootstrap';

const Course = ({name, icon, onClick}) => {
    return (
        <Card onClick={onClick}  className="text-center" style={{ width: '15rem', padding: '1rem', margin:'2rem'}}>
        <p>{icon}</p>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Name: {name} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Course
