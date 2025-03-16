import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About CommunionHub</h1>
        <p>Your gateway to fostering meaningful connections across communities.</p>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <h2>Our Vision</h2>
        <p>
          To create a world where people from diverse backgrounds come together to share, learn, and grow in harmony.
        </p>
        <h2>Our Mission</h2>
        <p>
          To provide a digital platform that bridges communities, promotes inclusivity, and fosters collaboration through engaging events and meaningful initiatives.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What Makes Us Unique?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Inclusivity at its Core</h3>
            <p>
              We embrace diversity and ensure that everyone feels welcome, respected, and valued.
            </p>
          </div>
          <div className="feature-card">
            <h3>Connecting Communities</h3>
            <p>
              Our platform provides a space for individuals and organizations to interact, collaborate, and build lasting connections.
            </p>
          </div>
          <div className="feature-card">
            <h3>Empowering Change</h3>
            <p>
              By sharing knowledge, experiences, and ideas, we empower communities to thrive and make a positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Join the Movement</h2>
        <p>
          Whether you’re an event organizer, a volunteer, or someone looking to expand their horizons, CommunionHub is your platform to make a difference.
        </p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default AboutPage;
