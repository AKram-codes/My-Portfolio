import React from "react";

export default function About() {
  return (
    <section className="section">
      <h1>About Me</h1>
      
      <div className="card">
        <h2>Background</h2>
        <p>
          I'm a passionate Computer Science Engineering student at PBR Visvodaya Institute of Technology and Sciences with a CGPA of 8.3/10. 
          Experienced in Java, C++, and Python with a focus on backend systems and AI applications
        </p>
        
        <p>
          I have hands-on experience with multiple programming languages and frameworks, and I enjoy building full-stack applications. 
           Passionate Computer Science undergraduate (2026 Batch) with a strong foundation in data structures, algorithms, and scalable software development
        </p>
      </div>

      <div className="card">
        <h2>Education</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="role-title">Bachelor of Technology (B.Tech)</h3>
            <p className="company">PBR Visvodaya Institute of Technology and Sciences</p>
            <div className="experience-meta">
              <span>Computer Science Engineering</span>
              <span>•</span>
              <span>CGPA: 8.3/10</span>
              <span>•</span>
              <span>Kavali, AP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="highlights">
        <h2>Key Achievements</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon">🏆</div>
            <h3 className="highlight-title">1st Place</h3>
            <p className="highlight-description">PPT & Idea Pitching presentations</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🌞</div>
            <h3 className="highlight-title">GSSOC</h3>
            <p className="highlight-description">Open Source Programs</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🎓</div>
            <h3 className="highlight-title">Technical Head</h3>
            <p className="highlight-description">College Technical ppt club</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">💼</div>
            <h3 className="highlight-title">Internship</h3>
            <p className="highlight-description">Full Stack Java Intern</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Leadership & Community</h2>
        <p>
          Served as a student coordinator and event lead, organizing technical events, coding contests, and workshops
 as part of college tech clubs.My leadership roles have honed my organizational and communication skills, enabling me to effectively collaborate with peers and mentors.
        </p>
        
        <p>
          I have participated in various hackathons and coding competitions, where I applied my problem-solving skills to develop innovative solutions under time constraints.
          I have also participated and won several Idea pitching competitions, showcasing my ability to present technical concepts clearly and effectively.
          achievements link : https://github.com/AKram-codes/Docs
        </p>
      </div>
    </section>
  );
}
