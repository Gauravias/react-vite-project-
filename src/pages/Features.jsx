import React from 'react';
import { ShieldCheck, Zap, BarChart3, Cloud, Code, GitMerge } from 'lucide-react';
import './Features.css';

const Features = () => {
  const primaryFeatures = [
    {
      icon: <ShieldCheck size={40} className="feature-icon" />,
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security and a 99.9% uptime guarantee.',
    },
    {
      icon: <Zap size={40} className="feature-icon" />,
      title: 'Blazing Fast',
      description: 'Experience unparalleled speed and performance, designed to keep up with your workflow.',
    },
    {
      icon: <BarChart3 size={40} className="feature-icon" />,
      title: 'Advanced Analytics',
      description: 'Gain valuable insights with a powerful analytics dashboard at your fingertips.',
    },
    {
      icon: <Cloud size={40} className="feature-icon" />,
      title: 'Cloud-Synced',
      description: 'Work from anywhere. Your data is always synced across all your devices in real-time.',
    },
    {
      icon: <Code size={40} className="feature-icon" />,
      title: 'Developer Friendly API',
      description: 'Integrate seamlessly with your existing tools using our robust and well-documented API.',
    },
     {
      icon: <GitMerge size={40} className="feature-icon" />,
      title: 'Easy Collaboration',
      description: 'Work together with your team in a shared environment designed for peak productivity.',
    },
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="hero-section features-hero">
        <div className="container">
          <h1 className="hero-title">Everything You Need, All in One Place.</h1>
          <p className="hero-subtitle">Discover a suite of powerful features designed to boost your productivity and streamline your workflow from day one.</p>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="feature-grid-section">
        <div className="container">
          <div className="feature-grid">
            {primaryFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                {feature.icon}
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Section 1 */}
      <section className="detailed-feature-section">
        <div className="container detailed-feature-container">
          <div className="detailed-feature-image">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Analytics Dashboard" />
          </div>
          <div className="detailed-feature-text">
            <span className="feature-tag">Analytics</span>
            <h2 className="detailed-feature-title">Make Data-Driven Decisions</h2>
            <p className="detailed-feature-description">
              Our intuitive analytics dashboard transforms complex data into clear, actionable insights. Track your progress, understand your audience, and identify growth opportunities with our powerful visualization tools. Stop guessing and start knowing.
            </p>
            <a href="#" className="feature-link">Learn more about analytics &rarr;</a>
          </div>
        </div>
      </section>
      
      {/* Detailed Feature Section 2 (Alternating) */}
      <section className="detailed-feature-section alternate-layout">
        <div className="container detailed-feature-container">
           <div className="detailed-feature-text">
            <span className="feature-tag">Integration</span>
            <h2 className="detailed-feature-title">Connect Your Favorite Tools</h2>
            <p className="detailed-feature-description">
             Our platform seamlessly integrates with the services you already use. Connect to popular apps in just a few clicks, creating a unified workflow that saves you time and eliminates manual data entry.
            </p>
            <a href="#" className="feature-link">Browse all integrations &rarr;</a>
          </div>
          <div className="detailed-feature-image">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team Collaboration" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2 className="cta-title">Ready to Experience the Difference?</h2>
          <p className="cta-subtitle">Take the next step and see how our platform can transform your work.</p>
          <button className="cta-button">Get Started For Free</button>
        </div>
      </section>
    </div>
  );
};

export default Features;
