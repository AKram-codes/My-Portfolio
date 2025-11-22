import React from "react";

export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "akram.codes24@gmail.com",
      description: "Send me an email for business inquiries or collaboration opportunities",
      icon: "📧",
      href: "mailto:akram.codes24@gmail.com",
      action: "Send Email"
    },
    {
      title: "Phone",
      value: "+91-6302178536",
      description: "Call me for urgent matters or quick discussions",
      icon: "📱",
      href: "tel:+916302178536",
      action: "Call Now"
    },
    {
      title: "LinkedIn",
      value: "akram-md-690a15339",
      description: "Connect with me professionally and view my career journey",
      icon: "💼",
      href: "https://www.linkedin.com/in/akram-md-690a15339",
      action: "Connect"
    },
    {
      title: "GitHub",
      value: "AKram-codes",
      description: "Explore my code repositories and open source contributions",
      icon: "💻",
      href: "https://github.com/AKram-codes",
      action: "View Profile"
    },
    {
      title: "Resume",
      value: "Download PDF",
      description: "Download my complete resume with detailed experience and skills",
      icon: "📄",
      href: "https://drive.google.com/file/d/1F-ytBdSQOsooHq_q4taNtC76dm6vNSgc/view?usp=sharing",
      action: "Download"
    },
    {
      title: "Location",
      value: "Kavali, AP",
      description: "Currently based in Kavali, Andhra Pradesh, India",
      icon: "📍",
      href: "https://maps.app.goo.gl/DYDJUSwQRTiaRWAB7",
      action: "View Location"
    }
  ];

  return (
    <section className="section">
      <h1>Get in Touch</h1>
      
      <p className="hero-description">
        Always up for a tech chat, new projects, or exciting opportunities — feel free to drop me a message below!
      </p>

      <div className="contact-grid">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            download={method.download || undefined}
            className="contact-card"

          >
            <div className="contact-card-header">
              <div className="contact-icon">
                {method.icon}
              </div>
              <div>
                <h3 className="contact-title">{method.title}</h3>
                <p className="contact-value">{method.value}</p>
              </div>
            </div>
            <p className="contact-description">{method.description}</p>
          </a>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to Start a Conversation?</h2>
        <p>
          Got a project idea, want to team up, or just feel like saying hello? 
          I’m all ears — let’s make something awesome together!
        </p>
        <div className="cta-buttons">
          <a 
            href="mailto:akram.codes24@gmail.com" 
            className="btn btn-primary"
          >
            📧 Send Email
          </a>
          <a 
            href="https://drive.google.com/file/d/1OqB1QzCAL9jYBBWutIgluQBhKU9by-iM/view?usp=sharing" 
            download="Akram_Mohammad_Resume.pdf"
            className="btn btn-secondary"
          >
            📄 Download Resume
          </a>
        </div>
      </div>

      <div className="card">
        <h2>What I'm Looking For</h2>
        <div className="grid grid-2">
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Collaboration Opportunities</h4>
            <ul className="achievements-list">
              <li>Web development projects</li>
              <li>Gen AI applications</li>
              <li>Full-stack application development</li>
              <li>Open source contributions</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Professional Opportunities</h4>
            <ul className="achievements-list">
              <li>Internship positions</li>
              <li>Full-time development roles</li>
              <li>Freelance projects</li>
              <li>Mentorship opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
