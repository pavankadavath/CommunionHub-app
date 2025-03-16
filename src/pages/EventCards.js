import React from 'react';
import './EventCards.css'; // Import styles for the card
import { useNavigate } from 'react-router-dom';

const EventCards = ({ event }) => {
  const navigate =useNavigate()
  return (
    <div className="event-card">
      {event.image ? (
        <img src={event.image} alt={event.title} className="event-image" />
      ) : (
        <div className="event-image-placeholder">Image not available</div>
      )}
      <div className="event-details">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        <p className="event-date-time">
          <strong>Date:</strong> {event.date} <br />
          <strong>Time:</strong> {event.time}
        </p>
        <p className="event-location">
          <strong>Location:</strong> {event.location}
        </p>
        <div className="event-footer">
        <p className={`event-price ${event.price === 'Free' ? 'free' : 'paid'}`}>
          {event.price}
        </p>
        <button className="cta-button" onClick={()=>navigate("register")}>Book</button>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
