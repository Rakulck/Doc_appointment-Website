import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, InputGroup, Dropdown, DropdownButton, Card, Row, Col } from 'react-bootstrap';
import { FaPlus, FaTrash, FaClone } from 'react-icons/fa';
import './Availability.css';

const Availability = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const initialTimeSlot = { start: '09:00 AM', end: '05:00 PM' };

  const [availability, setAvailability] = useState(
    daysOfWeek.map(day => ({
      day,
      enabled: false,
      timeSlots: [initialTimeSlot]
    }))
  );

  const handleToggle = (index) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].enabled = !updatedAvailability[index].enabled;
    setAvailability(updatedAvailability);
  };

  const handleTimeChange = (dayIndex, slotIndex, field, value) => {
    const updatedAvailability = [...availability];
    updatedAvailability[dayIndex].timeSlots[slotIndex][field] = value;
    setAvailability(updatedAvailability);
  };

  const handleAddSlot = (dayIndex) => {
    const updatedAvailability = [...availability];
    updatedAvailability[dayIndex].timeSlots.push({ ...initialTimeSlot });
    setAvailability(updatedAvailability);
  };

  const handleRemoveSlot = (dayIndex, slotIndex) => {
    const updatedAvailability = [...availability];
    updatedAvailability[dayIndex].timeSlots.splice(slotIndex, 1);
    setAvailability(updatedAvailability);
  };

  const handleCloneSlot = (dayIndex, slotIndex) => {
    const updatedAvailability = [...availability];
    const clonedSlot = { ...updatedAvailability[dayIndex].timeSlots[slotIndex] };
    updatedAvailability[dayIndex].timeSlots.splice(slotIndex + 1, 0, clonedSlot);
    setAvailability(updatedAvailability);
  };

  const generateTimeOptions = () => {
    const times = [];
    const start = new Date(0, 0, 0, 0, 0, 0);
    const end = new Date(0, 0, 0, 23, 30, 0);

    while (start <= end) {
      const hours = start.getHours() % 12 || 12;
      const minutes = start.getMinutes().toString().padStart(2, '0');
      const ampm = start.getHours() < 12 ? 'AM' : 'PM';
      times.push(`${hours}:${minutes} ${ampm}`);
      start.setMinutes(start.getMinutes() + 30);
    }

    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="container mt-4 d-flex justify-content-center align-items-center">
      <Card className="shadow-lg p-4" style={{ width: '100%', maxWidth: '800px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-center mb-0">Set Your Availability</h1>
          <Button variant="primary">Save</Button>
        </div>
        <Form>
          {availability.map((day, dayIndex) => (
            <Row key={day.day} className="day-container mb-3 align-items-center">
              <Col xs={3} className="d-flex align-items-center">
                <Form.Check
                  type="switch"
                  id={`switch-${day.day}`}
                  label={day.day}
                  checked={day.enabled}
                  onChange={() => handleToggle(dayIndex)}
                  className="day-switch"
                />
              </Col>
              <Col xs={9}>
                {day.enabled && (
                  <div className="time-slots-container">
                    {day.timeSlots.map((slot, slotIndex) => (
                      <InputGroup key={slotIndex} className="mb-2 align-items-center">
                        <DropdownButton
                          as={InputGroup.Prepend}
                          variant="outline-secondary"
                          title={slot.start}
                          id={`dropdown-start-${dayIndex}-${slotIndex}`}
                          className="time-dropdown"
                          onSelect={(value) => handleTimeChange(dayIndex, slotIndex, 'start', value)}
                        >
                          <div className="dropdown-scrollable">
                            {timeOptions.map((time, index) => (
                              <Dropdown.Item key={index} eventKey={time}>{time}</Dropdown.Item>
                            ))}
                          </div>
                        </DropdownButton>
                        <InputGroup.Text> - </InputGroup.Text>
                        <DropdownButton
                          as={InputGroup.Append}
                          variant="outline-secondary"
                          title={slot.end}
                          id={`dropdown-end-${dayIndex}-${slotIndex}`}
                          className="time-dropdown"
                          onSelect={(value) => handleTimeChange(dayIndex, slotIndex, 'end', value)}
                        >
                          <div className="dropdown-scrollable">
                            {timeOptions.map((time, index) => (
                              <Dropdown.Item key={index} eventKey={time}>{time}</Dropdown.Item>
                            ))}
                          </div>
                        </DropdownButton>
                        <Button variant="outline-secondary" onClick={() => handleCloneSlot(dayIndex, slotIndex)} className="ml-2">
                          <FaClone />
                        </Button>
                        <Button variant="outline-danger" onClick={() => handleRemoveSlot(dayIndex, slotIndex)} className="ml-2">
                          <FaTrash />
                        </Button>
                      </InputGroup>
                    ))}
                    <Button variant="outline-primary" onClick={() => handleAddSlot(dayIndex)}>
                      <FaPlus /> Add Time Slot
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
          ))}
        </Form>
      </Card>
    </div>
  );
};

export default Availability;
