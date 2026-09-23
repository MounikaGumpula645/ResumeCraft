import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Create a professional resume in minutes.</h1>
          <p>
            Resumecraft offers modern and professional templates that are easy to customize and download for free.
          </p>
          <Link to="/dashboard" className="cta-button">
            Start Building Your Resume
          </Link>
        </div>
        <div className="hero-image">
          {/* Updated image source to your new file */}
          <img src="/CV-Template-01.jpg" alt="Professional Resume" />
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Resumecraft?</h2>
        <div className="features-grid">
          <div className="feature-item">
            {/* You can add an icon here */}
            <h3>Free & Easy to Use</h3>
            <p>Our platform is completely free with an intuitive drag-and-drop interface.</p>
          </div>
          <div className="feature-item">
            {/* You can add an icon here */}
            <h3>Modern Templates</h3>
            <p>Choose from a wide variety of professionally designed templates for any career.</p>
          </div>
          <div className="feature-item">
            {/* You can add an icon here */}
            <h3>Download Instantly</h3>
            <p>Export your finished resume as a PDF and apply for jobs today.</p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="cta-final">
        <h2>Ready to land your dream job?</h2>
        <Link to="/dashboard" className="cta-button">
          Get Started for Free
        </Link>
      </section>
    </div>
  );
}

export default Home;