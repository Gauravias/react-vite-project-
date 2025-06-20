import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { Heart, Target, Lightbulb, Users } from 'lucide-react'; // Icons for values
import './About.css';

const About = () => {

  const teamMembers = [
    { name: 'Alex Johnson', title: 'Co-Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop', social: { linkedin: '#', twitter: '#' } },
    { name: 'Maria Garcia', title: 'Co-Founder & CTO', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop', social: { linkedin: '#', twitter: '#' } },
    { name: 'David Chen', title: 'Lead Designer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop', social: { linkedin: '#', twitter: '#' } },
    { name: 'Sarah Lee', title: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop', social: { linkedin: '#', twitter: '#' } },
  ];
  
  const companyValues = [
    { icon: <Target size={32} />, title: "Customer First", description: "We succeed when our customers succeed. Their challenges are our challenges." },
    { icon: <Lightbulb size={32} />, title: "Innovate Constantly", description: "We are never satisfied. We constantly push boundaries to find better solutions." },
    { icon: <Heart size={32} />, title: "Act with Integrity", description: "We believe in doing the right thing, always. Transparency and honesty guide us." },
    { icon: <Users size={32} />, title: "Stronger Together", description: "Collaboration is our cornerstone. We value diverse perspectives to build the best products." },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section about-hero">
        <div className="container">
          <h1 className="hero-title">Our mission is to build the future of digital interaction.</h1>
          <p className="hero-subtitle">We believe in crafting tools that are not only powerful and efficient but also a joy to use, fostering creativity and connection worldwide.</p>
        </div>
      </section>

      {/* Our Story Section */}
       <section className="our-story-section">
        <div className="container story-container">
            <div className="story-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Our team working" />
            </div>
            <div className="story-text">
                <h2 className="section-title">Our Story</h2>
                <p>Founded in a small garage in 2020, our company was born from a shared frustration with clunky, unintuitive software. We saw a world of possibility for tools that could empower people, not hinder them. With a passion for design and a relentless focus on user experience, we set out to build a platform that would change the game. Today, we're a growing team driven by that same founding principle: to make technology feel more human.</p>
            </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section">
        <div className="container">
          <h2 className="section-title">The Values That Drive Us</h2>
          <div className="values-grid">
            {companyValues.map(value => (
              <div key={value.title} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">The passionate individuals behind our success.</p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member-card">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-title">{member.title}</p>
                <div className="team-member-socials">
                  <a href={member.social.linkedin}><Linkedin size={20} /></a>
                  <a href={member.social.twitter}><Twitter size={20} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="cta-section join-us-cta">
        <div className="container cta-container">
          <h2 className="cta-title">Sound Like a Place For You?</h2>
          <p className="cta-subtitle">We’re always looking for talented people to join our mission. See our open positions.</p>
          <button className="cta-button">View Open Positions</button>
        </div>
      </section>
    </div>
  );
};

export default About;
