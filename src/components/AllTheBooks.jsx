import React from 'react';
import '../style/AllTheBooks.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

function AllTheBooks({ books }) {
  // console.log(books);
  return (  
    <Row>
      {books.map((book) => (
          <Col key={book.asin} className='p-0'>
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>€ {book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
      ))}
    </Row>

  );
}

export default AllTheBooks;