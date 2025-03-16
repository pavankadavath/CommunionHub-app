import React, { createContext, useState, useContext } from 'react';
import interfaith from '../Assets/interfaith.jpg';
import food from '../Assets/food.jpg';
import diwali from '../Assets/diwali.jpeg';
import cleanGreen from '../Assets/clean_green.jpg';
import christmas from '../Assets/chrismass.jpg';
import gathering from '../Assets/gathering.jpg';
import muslim from '../Assets/muslim.jpg';
import ganesh from '../Assets/ganesh.jpg';
import university from  '../Assets/university.jpg';
import yoga from '../Assets/yoga.jpg';
import holi from '../Assets/holi.jpg';
import foodfest from '../Assets/food.jpg';
import youthartcontest from '../Assets/youthartcontest.jpg';


const EventContext = createContext();

// Sample event data
const initialEvents = [
  {
    "title": "Interfaith Dialogue Night",
    "description": "A discussion evening where people from various faiths share their beliefs and foster mutual understanding.",
    "date": "2025-03-25",
    "time": "18:00",
    "location": "Community Hall, Himayatnagar",
    "price": "Free",
    "image": interfaith
  },
    {
      "title": "Diwali Rangoli Competition",
      "description": "Celebrate the festival of lights by creating beautiful rangoli designs.",
      "date": "2025-11-11",
      "time": "10:00",
      "location": "Community Hall",
      "price": "Free",
      "image": diwali
    },
    {
      "title": "Eid Charity Food Drive",
      "description": "Help distribute food to the needy during Eid celebrations.",
      "date": "2025-03-25",
      "time": "14:00",
      "location": "Central Mosque Grounds",
      "price": "Paid",
      "image": muslim
    },
    
    {
      "title": "Christmas Carol Singing Contest",
      "description": "Spread festive cheer through soulful Christmas carols.",
      "date": "2025-12-22",
      "time": "17:00",
      "location": "St. Mary's Church",
      "price": "Free",
      "image": christmas
    },
    {
      "title": "Ganesh Chaturthi Idol Painting Contest",
      "description": "Bring Lord Ganesha to life with your artistic skills.",
      "date": "2025-09-01",
      "time": "15:00",
      "location": "Cultural Arts Center",
      "price": "Free",
      "image": ganesh
    },
    {
      "title": "Youth Leadership Workshop",
      "description": "A seminar for young adults focusing on leadership, teamwork, and community service.",
      "date": "2025-06-10",
      "time": "09:00",
      "location": "Education Center",
      "price": "Paid",
      "image": university
    },
    {
      "title": "Clean & Green Society Drive",
      "description": "Join hands to clean and beautify our neighborhood park.",
      "date": "2025-05-01",
      "time": "08:00",
      "location": "Sunshine Park",
      "price": "Volunteer Event",
      "image": cleanGreen
    },
    {
      "title": "Cultural Food Tasting Festival",
      "description": "Explore cuisines from various cultural backgrounds, prepared by local chefs.",
      "date": "2025-03-30",
      "time": "12:00",
      "location": "City Park Pavilion",
      "price": "Paid",
      "image": food
    },
      
      {
        "title": "Holi Colors Photography Contest",
        "description": "Capture the vibrant spirit of Holi through your lens.",
        "date": "2025-03-24",
        "time": "09:00",
        "location": "Heritage Garden",
        "price": "Paid Entry",
        "image": holi
      },
      {
        "title": "International Yoga Day Contest",
        "description": "Showcase your yoga skills and learn from experts.",
        "date": "2025-06-21",
        "time": "07:00",
        "location": "Green Meadows Park",
        "price": "Free",
        "image": yoga
      },
      {
        "title": "Onam Pookalam Design Contest",
        "description": "Create intricate floral designs to celebrate Onam.",
        "date": "2025-08-27",
        "time": "10:00",
        "location": "Kerala Cultural Center",
        "price": "Free",
        "image": foodfest
      },
      // {
      //   "title": "Women's Day Empowerment Run",
      //   "description": "A marathon celebrating women and promoting equality.",
      //   "date": "2025-03-08",
      //   "time": "06:30",
      //   "location": "City Plaza",
      //   "price": "Free",
      //   "image": "https://example.com/images/womens-day-run.jpg"
      // },
  //     {
  //       "title": "Earth Day Poster Making Competition",
  //       "description": "Raise awareness about the environment through creative posters.",
  //       "date": "2025-04-22",
  //       "time": "14:00",
  //       "location": "Eco Awareness Auditorium",
  //       "price": "Free",
  //       "image": "https://example.com/images/earth-day-poster.jpg"
  //     },
  //     {
  //       "title": "Navratri Garba Dance Contest",
  //       "description": "Celebrate the spirit of Navratri with a night of Garba dancing.",
  //       "date": "2025-10-13",
  //       "time": "18:00",
  //       "location": "Festival Grounds",
  //       "price": "Free",
  //       "image": "https://example.com/images/navratri-garba.jpg"
  //     },
  // {
  //   "title": "Music for Harmony Contest",
  //   "description": "Local bands and choirs perform to spread messages of unity and peace.",
  //   "date": "2025-04-15",
  //   "time": "16:00",
  //   "location": "Riverside Amphitheater",
  //   "price": "Paid",
  //   "image": "https://example.com/images/music-harmony.jpg"
  // },
  // {
  //   "title": "World Religions Expo",
  //   "description": "Learn about different religions through interactive exhibits and Q&A sessions.",
  //   "date": "2025-05-05",
  //   "time": "11:00",
  //   "location": "Town Exhibition Center",
  //   "price": "Free",
  //   "image": "https://example.com/images/world-religions-expo.jpg"
  // },
  {
    "title": "Meditation and Wellness Workshop",
    "description": "A guided session on mindfulness meditation and self-care techniques.",
    "date": "2025-05-15",
    "time": "07:30",
    "location": "Zen Wellness Studio",
    "price": "Paid",
    "image": yoga
  },
  {
    "title": "Charity Marathon",
    "description": "A 5K run to raise funds for local community projects.",
    "date": "2025-06-01",
    "time": "07:00",
    "location": "Riverside Park",
    "price": "Free",
    "image": youthartcontest
  },
  {
    "title": "Family Picnic and Talent Show",
    "description": "A family-friendly event with games, food, and a talent show.",
    "date": "2025-06-05",
    "time": "10:00",
    "location": "Lakeside Park",
    "price": "Paid",
    "image": gathering
  },
  // {
  //   "title": "Photography Contest",
  //   "description": "Contest featuring photographs that depict faith, community, and nature.",
  //   "date": "2025-06-20",
  //   "time": "10:00",
  //   "location": "Photography Studio",
  //   "price": "Free",
  //   "image": "https://example.com/images/photography-contest.jpg"
  // }
];

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(initialEvents);
  const [activeFilter, setActiveFilter] = useState('All');

  // Add a new event
  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  // Get filtered events
  const getFilteredEvents = () => {
    if (activeFilter === 'All') {
      return events;
    }
    return events.filter(event => event.category === activeFilter);
  };

  return (
    <EventContext.Provider value={{ events, addEvent, getFilteredEvents, activeFilter, setActiveFilter }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  return useContext(EventContext);
};

