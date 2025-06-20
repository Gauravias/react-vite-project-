import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 15, yearly: 12 },
      description: 'Perfect for individuals and hobbyists starting out.',
      features: ['10 Projects', '5GB Storage', 'Basic Analytics', 'Community Support'],
      buttonText: 'Choose Starter',
    },
    {
      name: 'Pro',
      price: { monthly: 35, yearly: 29 },
      description: 'Ideal for professionals and small teams.',
      features: ['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'API Access'],
      isPopular: true,
      buttonText: 'Choose Pro',
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      description: 'For large organizations with advanced needs.',
      features: ['Unlimited Projects', 'Unlimited Storage', 'Dedicated Support', 'SSO & Security', 'Custom Integrations'],
      buttonText: 'Contact Sales',
    },
  ];

  const faqs = [
      { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your subscription at any time from your account settings. Your plan will remain active until the end of the current billing cycle." },
      { q: "What happens if I exceed my plan's limits?", a: "We will notify you when you are approaching your limits. You can choose to upgrade to a higher plan or purchase add-ons to accommodate your needs." },
      { q: "Do you offer discounts for non-profits or students?", a: "Yes! We are happy to support non-profits and educational institutions. Please contact our support team with your details to learn more about our special pricing." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also support bank transfers." },
  ]

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="hero-section pricing-hero">
        <div className="container">
          <h1 className="hero-title">Simple, Transparent Pricing</h1>
          <p className="hero-subtitle">Choose the plan that's right for you. No hidden fees, ever.</p>
          
          {/* Pricing Toggle */}
          <div className="pricing-toggle-container">
            <span>Monthly</span>
            <label className="switch">
              <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
              <span className="slider round"></span>
            </label>
            <span>
              Yearly <span className="yearly-badge">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="pricing-cards-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
                {plan.isPopular && <div className="popular-badge">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  {plan.name === 'Enterprise' ? (
                     <span className="price-amount">Custom</span>
                  ) : (
                    <>
                      <span className="price-currency">$</span>
                      <span className="price-amount">{isYearly ? plan.price.yearly : plan.price.monthly}</span>
                      <span className="price-period">/ month</span>
                    </>
                  )}
                </div>
                 {plan.name !== 'Enterprise' && isYearly && (
                    <p className="yearly-billing-note">Billed annually</p>
                )}
                
                <ul className="features-list">
                  {plan.features.map((feature) => (
                    <li key={feature}><CheckCircle2 size={16} className="feature-check-icon" /> {feature}</li>
                  ))}
                </ul>
                <button className="choose-plan-button">{plan.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
          <div className="container">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-container">
                  {faqs.map((faq, index) => (
                       <details key={index} className="faq-item">
                          <summary className="faq-question">
                            {faq.q}
                          </summary>
                          <p className="faq-answer">{faq.a}</p>
                       </details>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default Pricing;
