import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import EventCards from './EventCards';
import hero from '../Assets/hero.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ events }) => {
  useEffect(() => {
    document.title = 'Communion App - Home';
  }, []);
  const navigate =useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <img src={hero} alt="Communion App Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Connecting People Across Faiths & Interests</h1>
          <p>Building bridges between communities through shared events, conversations, and understanding.</p>
          <div className="hero-buttons">
            <a href="#events-section" className="cta-button">
              Browse Events
            </a>
            <Link to="/register" className="cta-button secondary">
              Login / Register
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to the Communion App</h2>
        <p>
          Communion is more than just an event platform — it's a movement to bring people together
          across different faiths, backgrounds, and interests.
        </p>
        <p>
          Whether you're looking to share your traditions, learn about others, volunteer for a cause,
          or simply make new connections, Communion provides the space to make it happen.
        </p>
      </section>

      {/* Events Section */}
      <section className="events-section" id="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {events.slice(0, 6).map((event, index) => (
            <EventCards key={index} event={event} onBook={() => navigate("/register")}/>
          ))}
        </div>
        <div className="explore-more">
          <Link to="/register" className="cta-button secondary explore-button">
            Explore More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          {/* Feature Cards */}
          <div className="feature-card">
            <div className="icon-container">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>Find Events</h3>
            <p>Discover diverse events in your community that suit your passions and interests.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <i className="fas fa-users"></i>
            </div>
            <h3>Connect With Others</h3>
            <p>Engage with people from different backgrounds and build lasting relationships.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <i className="fas fa-plus-circle"></i>
            </div>
            <h3>Create Your Own Events</h3>
            <p>Host events that inspire, educate, and bring people closer together.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Volunteer Opportunities</h3>
            <p>Contribute to causes that matter to you and make a meaningful difference in your community.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <i className="fas fa-globe"></i>
            </div>
            <h3>Global Events</h3>
            <p>Join events beyond your local area to explore and celebrate global cultures and traditions.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Personalized Suggestions</h3>
            <p>Get event recommendations based on your interests and participation history.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Members Say</h2>
        <div className="testimonials-grid">
          {/* Testimonial Cards */}
          {[
            { text: 'The Communion App helped me connect with my local community in ways I never thought possible.', author: 'Priya' },
            { text: 'Hosting my first event on Communion was a breeze. The platform\'s ease of use was inspiring!', author: 'Arjun' },
            { text: 'Being able to participate in events from different cultures enriched my life.', author: 'Fatima' },
            { text: 'The app\'s volunteer opportunities let me give back to society while meeting like-minded individuals.', author: 'Ravi' },
            { text: 'CommunionHub is more than an app; it’s a platform for building genuine connections.', author: 'Aisha' },
            { text: 'As someone new to the city, Communion made it easy for me to meet amazing people.', author: 'Karthik' },
          ].map(({ text, author }, index) => (
            <div className="testimonial" key={index}>
              <div className="testimonial-content">
                <p>"{text}"</p>
                <span className="testimonial-author">- {author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-intro">
          <h2>Why Join Us?</h2>
          <p>Discover how CommunionHub can bring value to your life and community:</p>
        </div>
        <div className="benefits-list">
          <ul>
            <li>Find events tailored to your passions.</li>
            <li>Build bridges across different communities.</li>
            <li>Share and celebrate your culture with others.</li>
            <li>Contribute to meaningful causes and initiatives.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Make a Difference?</h2>
        <p>
          Join a growing community that thrives on mutual understanding, shared interests, and meaningful collaborations.
        </p>
        <Link to="/events" className="cta-button">
          Browse Events Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
