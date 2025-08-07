import React from "react";

export default function Experience() {
  return (
    <section className="section">
      <h1>Experience & Leadership</h1>
      
      <p className="hero-description">
        My professional journey includes internship experience, leadership roles, and active community involvement.
      </p>

      <div className="experience-item">
        <div className="experience-header">
          <h3 className="role-title"> Full Stack Java Intern</h3>
          <p className="company">CodeTantra</p>
          <div className="experience-meta">
            <span>Remote</span>
            <span>•</span>
            <span>2025</span>
            <span>•</span>
            <span className="type-badge">Internship</span>
          </div>
        </div>
        
        <p>
          Completed a certified internship program focused on enterprise-level full stack Java development.
           Developed a robust URL Shortener Application using Spring Boot, enabling long URLs to be transformed into
 concise short links with expiration, redirection, and analytics features.
        </p>
        
        <ul className="achievements-list">
          <li> Implemented RESTful APIs for creating, retrieving, and managing shortened URLs with secure token-based
 access.</li>
          <li>Applied frontend frameworks like HTML/CSS and Thymeleaf to build an interactive UI.</li>
          <li> Integrated PostgeSQL for persistent storage and utilized Spring Data JPA for database operations.</li>
          <li> Followed MVC architecture and deployed the app using tools like Postman and GitHub.</li>
          <li>Source Code: github.com/AKram-codes/url-shortener-springboot</li>
          <li>Certificate of Completion: <a href="https://visvodayata.codetantra.com/cert/certificate.jsp?certId=CT403-uLNLuXc-cbF" target="_blank">View Certificate</a></li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3 className="role-title">Technical Head</h3>
          <p className="company">Technical Club, PBR VITS</p>
          <div className="experience-meta">
            <span>Kavali, AP</span>
            <span>•</span>
            <span>2024 - Present</span>
            <span>•</span>
            <span className="type-badge">Leadership</span>
          </div>
        </div>
        
        <p>
          Leading technical initiatives and mentoring fellow students in programming and development practices. 
          Responsible for organizing tech events and workshops at the campus.
        </p>
        
        <ul className="achievements-list">
          <li>Organized 5+ technical events including Tech talks and coding competitions</li>
          <li>Conducted workshops on Github Student Education</li>
          <li>Mentored students in web development and programming</li>
          <li>Managed technical aspects of club activities and events</li>
          <li>Fostered a collaborative environment for learning and innovation</li>
        </ul>
      </div>

      <div className="highlights">
        <h2>Competitive Achievements</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon">🏆</div>
            <h3 className="highlight-title">1st Place</h3>
            <p className="highlight-description">PPT & Idea Pitching Competition</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🌞</div>
            <h3 className="highlight-title">GSSOC</h3>
            <p className="highlight-description">Open Source Program</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🎯</div>
            <h3 className="highlight-title">Event Speaker</h3>
            <p className="highlight-description">Workshop on Github Education</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🏅</div>
            <h3 className="highlight-title">Recognition</h3>
            <p className="highlight-description">MLH member</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Certifications & Learning</h2>
        <div className="grid grid-2">
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Technical Certifications</h4>
            <ul className="achievements-list">
              <li>Python (Basic) - HackerRank</li>
              <li>Java (Basic) - HackerRank</li>
              <li>MongoDB Certified Developer Associate</li>
              <li>GitHub Foundations Certification</li>
              <li>Python Course Certification by Scaler</li>
              <li>Geeks for Geeks 160 Days Summer DSA Program</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Professional Skills</h4>
            <ul className="achievements-list">
              <li>Team Leadership & Management</li>
              <li>Event Organization & Planning</li>
              <li>Technical Workshop Delivery</li>
              <li>Mentoring & Knowledge Sharing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Let's Work Together</h2>
        <p>
          I'm always interested in new opportunities and collaborations. 
          Whether it's a project, internship, or just a tech discussion, feel free to reach out!
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a 
            href="https://www.linkedin.com/in/akram-md-690a15339" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
