import React, { useState } from 'react';
import { Container, Nav, Tab, Card, Button, Row, Col } from 'react-bootstrap';
import './Bookings.css';

const Bookings = () => {
  const [key, setKey] = useState('upcoming');

  // Example bookings data
  const bookings = [
    { id: 1, date: '2024-06-20', time: '10:00 AM - 11:00 AM', patientName: 'John Doe' },
    { id: 2, date: '2024-06-21', time: '02:00 PM - 03:00 PM', patientName: 'Jane Smith' }
  ];

  return (
    <Container fluid className="mt-4">
      <h1 className="mb-4">Bookings</h1>
      <p>See upcoming and past events booked through your event type links.</p>
      <Tab.Container id="bookings-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="upcoming">Upcoming</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="unconfirmed">Unconfirmed</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="recurring">Recurring</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="past">Past</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="canceled">Canceled</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="upcoming">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <NoBookingsMessage />
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="unconfirmed">
            <NoBookingsMessage />
          </Tab.Pane>
          <Tab.Pane eventKey="recurring">
            <NoBookingsMessage />
          </Tab.Pane>
          <Tab.Pane eventKey="past">
            <NoBookingsMessage />
          </Tab.Pane>
          <Tab.Pane eventKey="canceled">
            <NoBookingsMessage />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

const NoBookingsMessage = () => (
  <Card className="text-center p-4" style={{ minHeight: '300px', minWidth: '400px' }}>
    <Card.Body>
      <Card.Title>No upcoming bookings</Card.Title>
      <Card.Text>
        You have no upcoming bookings. As soon as someone books a time with you it will show up here.
      </Card.Text>
    </Card.Body>
  </Card>
);

const BookingCard = ({ booking }) => (
  <Card className="mb-3" style={{ width: '100%' }}>
    <Card.Body>
      <Row>
        <Col xs={8}>
          <Card.Title className="card-title">{booking.patientName}</Card.Title>
          <Card.Text className="card-text">{booking.time}</Card.Text>
          <Card.Text className="card-text">{booking.date}</Card.Text>
        </Col>
        <Col xs={4} className="text-right">
    <Button variant="primary" className="mx-2" size="sm">Reschedule</Button>
    <Button variant="danger" size="sm">Cancel</Button>
</Col>

      </Row>
    </Card.Body>
  </Card>
);

export default Bookings;
