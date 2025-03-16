import React from 'react'
import EventCards from './EventCards'
import './EventsPage.css'

const EventsPage = ({events}) => {
  return (
      <div className="event-list">
      {events.map((event, index) => (
        <EventCards key={index} event={event} />
      ))}
    </div>
  )
}

export default EventsPage
