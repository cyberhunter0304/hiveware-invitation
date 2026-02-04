import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ChevronRight, TrendingUp, Zap, Shield, Lock, Code, Smartphone, DollarSign, ArrowRight, Check } from 'lucide-react';

const styles = `
/* ================================================
   HiveWare Invitation - Complete Styles
   All-in-One App.jsx
   ================================================ */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-green: #10b981;
  --primary-purple: #a855f7;
  --accent-gold: #fcd34d;
  --dark-bg: #0f172a;
  --dark-secondary: #1e293b;
  --text-light: #f1f5f9;
  --text-gray: #cbd5e1;
  --text-muted: #94a3b8;
}

body {
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  background: linear-gradient(135deg, var(--dark-bg) 0%, #1e1b4b 50%, #0d3b2d 100%);
  color: var(--text-light);
  overflow-x: hidden;
  min-height: 100vh;
}

.invitation-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--dark-bg) 0%, #1e1b4b 50%, #0d3b2d 100%);
}

/* ==================== PROGRESS BAR ==================== */

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-green), var(--primary-purple), var(--accent-gold));
  z-index: 100;
  transition: width 0.3s ease;
}

/* ==================== SLIDES CONTAINER ==================== */

.slides-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.slide {
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideIn 0.8s ease-out;
  padding: 40px 20px;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(10px); opacity: 1; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, 30px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.slide-content {
  text-align: center;
  width: 100%;
  max-width: 800px;
  position: relative;
  z-index: 10;
}

.slide-title {
  font-size: 56px;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(90deg, var(--primary-green), var(--primary-purple), var(--accent-gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

/* ==================== HERO SLIDE ==================== */

.hero-slide {
  background: radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%);
  border-radius: 30px;
  border: 1px solid rgba(168, 85, 247, 0.2);
  padding: 60px 40px;
}

.hero-icon {
  font-size: 100px;
  margin-bottom: 30px;
  display: block;
  animation: float 3s ease-in-out infinite;
}

.company-name {
  font-size: 48px;
  font-weight: 800;
  color: var(--accent-gold);
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(252, 211, 77, 0.3);
}

.slide-description {
  font-size: 22px;
  color: var(--text-gray);
  margin-bottom: 40px;
  line-height: 1.6;
}

.slide-footer {
  margin-top: 60px;
  animation: fadeIn 1.5s ease-in;
}

.footer-text {
  color: var(--text-muted);
  font-size: 13px;
  margin-bottom: 15px;
}

.arrow-animation {
  font-size: 24px;
  animation: bounce 2s infinite;
}

/* ==================== PROBLEM SLIDE ==================== */

.problem-slide {
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(168, 85, 247, 0.1));
  border-radius: 30px;
  border: 1px solid rgba(220, 38, 38, 0.2);
  padding: 60px 40px;
}

.points-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
}

.point-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px;
  background: rgba(15, 23, 42, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(220, 38, 38, 0.2);
  transition: all 0.3s ease;
}

.point-item:hover {
  border-color: var(--accent-gold);
  background: rgba(252, 211, 77, 0.05);
  transform: translateX(10px);
}

.point-item.highlight {
  background: rgba(16, 185, 129, 0.05);
  border-color: rgba(16, 185, 129, 0.3);
}

.point-item.highlight:hover {
  border-color: var(--accent-gold);
  background: rgba(16, 185, 129, 0.1);
}

.point-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.point-item p {
  font-size: 16px;
  color: var(--text-gray);
  text-align: left;
  line-height: 1.6;
}

.animate-in {
  animation: slideInLeft 0.6s ease-out forwards;
  opacity: 0;
}

/* ==================== SOLUTION SLIDE ==================== */

.solution-slide {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(168, 85, 247, 0.1));
  border-radius: 30px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 60px 40px;
}

/* ==================== SERVICES SLIDE ==================== */

.services-slide {
  background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
  border-radius: 30px;
  border: 1px solid rgba(168, 85, 247, 0.2);
  padding: 60px 40px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.service-item {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(16, 185, 129, 0.1));
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  border-color: var(--accent-gold);
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.2);
}

.service-icon {
  width: 50px;
  height: 50px;
  color: var(--primary-green);
  margin: 0 auto 15px;
  transition: color 0.3s ease;
}

.service-item:hover .service-icon {
  color: var(--accent-gold);
}

.service-item h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.service-item p {
  color: var(--text-gray);
  font-size: 13px;
  line-height: 1.6;
}

/* ==================== PRICING SLIDE ==================== */

.pricing-slide {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(168, 85, 247, 0.05));
  border-radius: 30px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 60px 40px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.pricing-item {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(16, 185, 129, 0.1));
  border: 2px solid rgba(168, 85, 247, 0.3);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  position: relative;
}

.pricing-item:hover {
  border-color: var(--accent-gold);
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(252, 211, 77, 0.2);
}

.pricing-item h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--primary-green);
}

.price {
  font-size: 32px;
  font-weight: 900;
  color: var(--accent-gold);
  margin: 20px 0;
  text-shadow: 0 0 20px rgba(252, 211, 77, 0.3);
}

.price-desc {
  color: var(--text-gray);
  font-size: 13px;
  line-height: 1.6;
}

.pricing-note {
  margin-top: 40px;
  color: var(--text-gray);
  font-size: 14px;
  font-style: italic;
}

/* ==================== PROOF SLIDE ==================== */

.proof-slide {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(16, 185, 129, 0.1));
  border-radius: 30px;
  border: 1px solid rgba(168, 85, 247, 0.2);
  padding: 60px 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.stat-number {
  font-size: 48px;
  font-weight: 900;
  color: var(--primary-green);
  text-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

.stat-label {
  color: var(--text-gray);
  font-size: 14px;
  font-weight: 600;
}

.proof-text {
  color: var(--text-muted);
  font-size: 14px;
  margin-top: 40px;
  font-style: italic;
}

/* ==================== CTA SLIDE ==================== */

.cta-slide {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(168, 85, 247, 0.15));
  border-radius: 30px;
  border: 2px solid rgba(16, 185, 129, 0.4);
  padding: 60px 40px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-subtitle {
  font-size: 20px;
  color: var(--text-gray);
  margin-bottom: 40px;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 30px auto;
  animation: slideIn 0.6s ease-out;
}

.form-input {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 10px;
  padding: 14px 20px;
  color: var(--text-light);
  font-size: 14px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: var(--text-muted);
}

.form-input:focus {
  outline: none;
  border-color: var(--accent-gold);
  box-shadow: 0 0 15px rgba(252, 211, 77, 0.2);
}

textarea.form-input {
  resize: vertical;
  font-family: inherit;
}

.form-submit {
  background: linear-gradient(135deg, var(--accent-gold), var(--primary-green));
  color: var(--dark-bg);
  border: none;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.form-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(252, 211, 77, 0.3);
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(168, 85, 247, 0.2));
  border: 2px solid var(--primary-green);
  border-radius: 20px;
  animation: slideIn 0.6s ease-out;
  max-width: 500px;
  margin: 30px auto;
}

.success-icon {
  font-size: 60px;
  margin-bottom: 20px;
  animation: scaleIn 0.6s ease-out;
}

.success-message h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(90deg, var(--primary-green), var(--primary-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.success-message p {
  color: var(--text-gray);
  font-size: 16px;
  line-height: 1.6;
}

.error-message {
  color: #ef4444;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
}

.contact-info {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(168, 85, 247, 0.2);
}

.contact-info p {
  color: var(--text-gray);
  font-size: 14px;
  margin: 10px 0;
}

/* ==================== NAVIGATION CONTROLS ==================== */

.nav-controls {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  align-items: center;
  z-index: 50;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  padding: 15px 30px;
  border-radius: 50px;
  border: 1px solid rgba(168, 85, 247, 0.3);
  animation: slideUp 0.8s ease-out;
}

.nav-button {
  background: linear-gradient(135deg, var(--primary-green), var(--primary-purple));
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s ease;
}

.nav-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slide-indicator {
  display: flex;
  gap: 5px;
  align-items: center;
  font-weight: 600;
  color: var(--accent-gold);
}

.current {
  font-size: 16px;
}

.total {
  color: var(--text-muted);
}

/* ==================== SLIDE DOTS ==================== */

.slide-dots {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 50;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(168, 85, 247, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  border-color: var(--accent-gold);
  transform: scale(1.3);
}

.dot.active {
  background: linear-gradient(135deg, var(--primary-green), var(--primary-purple));
  border-color: transparent;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.5);
}

/* ==================== DECORATIVE ELEMENTS ==================== */

.decoration {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
  z-index: 1;
  pointer-events: none;
}

.deco-1 {
  width: 400px;
  height: 400px;
  background: var(--primary-green);
  top: 10%;
  left: 5%;
  animation: float 8s ease-in-out infinite;
}

.deco-2 {
  width: 300px;
  height: 300px;
  background: var(--primary-purple);
  bottom: 20%;
  right: 10%;
  animation: float 6s ease-in-out infinite;
  animation-delay: 1s;
}

.deco-3 {
  width: 350px;
  height: 350px;
  background: var(--accent-gold);
  top: 50%;
  right: 5%;
  animation: float 10s ease-in-out infinite;
  animation-delay: 2s;
}

/* ==================== RESPONSIVE ==================== */

@media (max-width: 768px) {
  .slide-title {
    font-size: 36px;
  }

  .company-name {
    font-size: 32px;
  }

  .slide-description {
    font-size: 16px;
  }

  .nav-controls {
    bottom: 20px;
    padding: 12px 20px;
    gap: 15px;
  }

  .nav-button {
    padding: 8px 16px;
    font-size: 12px;
  }

  .slide-dots {
    display: none;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-item:hover {
    transform: scale(1);
  }

  .slide-indicator {
    font-size: 12px;
  }

  .slide {
    padding: 20px 15px;
  }

  .slide-content {
    padding: 20px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .slide-title {
    font-size: 28px;
  }

  .company-name {
    font-size: 24px;
  }

  .hero-icon {
    font-size: 60px;
  }

  .slide-description {
    font-size: 14px;
  }

  .nav-controls {
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
  }

  .point-item {
    flex-direction: column;
    text-align: center;
  }

  .point-item p {
    text-align: center;
  }
}
`;

// Form Component
function ContactFormComponent() {
  const [state, handleSubmit] = useForm("maqbrgev");

  if (state.succeeded) {
    return (
      <div className="success-message">
        <div className="success-icon">✓</div>
        <h3>Thank You!</h3>
        <p>We've received your proposal request and will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        name="company"
        className="form-input"
        required
      />
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        className="form-input"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        id="email"
        name="email"
        className="form-input"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="error-message"
      />
      <textarea
        placeholder="Tell us about your project..."
        name="message"
        id="message"
        rows="4"
        className="form-input"
        required
      ></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className="error-message"
      />
      <button 
        type="submit" 
        className="form-submit"
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending...' : 'Send Proposal Request'}
      </button>
    </form>
  );
}

// Main App Component
export default function InvitationPresentation() {
  const [slide, setSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Get company name from URL params if available
  const params = new URLSearchParams(window.location.search);
  const companyName = params.get('company') || 'Your Company';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inject styles
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  const slides = [
    {
      type: 'hero',
      title: 'An Opportunity for',
      subtitle: companyName,
      description: 'Elevate Your Digital Presence Without the Enterprise Price Tag',
      icon: '🚀'
    },
    {
      type: 'problem',
      title: 'We Know the Challenge',
      points: [
        'Professional websites often cost ₹5-10+ lakhs',
        'Maintenance eats into your budget monthly',
        'You need enterprise quality, not enterprise costs',
        'Finding reliable, affordable developers is tough'
      ]
    },
    {
      type: 'solution',
      title: 'Here\'s What We Offer',
      points: [
        '✓ Custom websites at 40-50% less than typical agencies',
        '✓ Enterprise-grade security built-in',
        '✓ Affordable monthly maintenance plans',
        '✓ Direct access to experienced developers'
      ]
    },
    {
      type: 'services',
      title: 'What We Can Build For You',
      services: [
        { icon: Code, title: 'Custom Development', desc: 'Tailored websites built specifically for your business' },
        { icon: Shield, title: 'Secure Hosting', desc: 'SSL encryption, DDoS protection, daily backups' },
        { icon: Smartphone, title: 'Mobile Ready', desc: 'Perfect on all devices - desktop, tablet, mobile' },
        { icon: TrendingUp, title: 'SEO Optimized', desc: 'Built-in best practices for search rankings' }
      ]
    },
    {
      type: 'pricing',
      title: 'Investment & Value',
      plans: [
        { name: 'Website Build', price: '₹1,50,000 - ₹3,50,000', desc: 'Complete custom website (4-8 weeks)' },
        { name: 'Monthly Support', price: '₹9,999 - ₹34,999', desc: 'Choose your maintenance level' }
      ]
    },
    {
      type: 'proof',
      title: 'Our Track Record',
      stats: [
        { number: '50+', label: 'Projects Delivered' },
        { number: '99.9%', label: 'Uptime Guarantee' },
        { number: '3-5 yrs', label: 'Experience' }
      ]
    },
    {
      type: 'cta',
      title: 'Ready to Transform Your Online Presence?',
      subtitle: 'Let\'s have a conversation about your vision.',
      buttonText: 'Schedule a Consultation'
    }
  ];

  const nextSlide = () => {
    if (slide < slides.length - 1) {
      setSlide(slide + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="invitation-container">
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* Slide Renderer */}
      <div className="slides-container">
        {/* Slide 0: Hero */}
        {slide === 0 && (
          <section className="slide hero-slide">
            <div className="slide-content">
              <div className="hero-icon">{slides[0].icon}</div>
              <h1 className="slide-title">{slides[0].title}</h1>
              <h2 className="company-name">{slides[0].subtitle}</h2>
              <p className="slide-description">{slides[0].description}</p>
              <div className="slide-footer">
                <p className="footer-text">Swipe or scroll to explore</p>
                <div className="arrow-animation">↓</div>
              </div>
            </div>
          </section>
        )}

        {/* Slide 1: Problem */}
        {slide === 1 && (
          <section className="slide problem-slide">
            <div className="slide-content">
              <h2 className="slide-title">{slides[1].title}</h2>
              <div className="points-list">
                {slides[1].points.map((point, i) => (
                  <div key={i} className="point-item animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="point-icon">⚠️</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Slide 2: Solution */}
        {slide === 2 && (
          <section className="slide solution-slide">
            <div className="slide-content">
              <h2 className="slide-title">{slides[2].title}</h2>
              <div className="points-list">
                {slides[2].points.map((point, i) => (
                  <div key={i} className="point-item highlight animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="point-icon">✨</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Slide 3: Services */}
        {slide === 3 && (
          <section className="slide services-slide">
            <div className="slide-content">
              <h2 className="slide-title">{slides[3].title}</h2>
              <div className="services-grid">
                {slides[3].services.map((service, i) => (
                  <div key={i} className="service-item animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
                    <service.icon className="service-icon" />
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Slide 4: Pricing */}
        {slide === 4 && (
          <section className="slide pricing-slide">
            <div className="slide-content">
              <h2 className="slide-title">{slides[4].title}</h2>
              <div className="pricing-grid">
                {slides[4].plans.map((plan, i) => (
                  <div key={i} className="pricing-item animate-in" style={{ animationDelay: `${i * 0.2}s` }}>
                    <h3>{plan.name}</h3>
                    <div className="price">{plan.price}</div>
                    <p className="price-desc">{plan.desc}</p>
                  </div>
                ))}
              </div>
              <p className="pricing-note">💡 Flexible packages tailored to your needs</p>
            </div>
          </section>
        )}

        {/* Slide 5: Proof */}
        {slide === 5 && (
          <section className="slide proof-slide">
            <div className="slide-content">
              <h2 className="slide-title">{slides[5].title}</h2>
              <div className="stats-grid">
                {slides[5].stats.map((stat, i) => (
                  <div key={i} className="stat-item animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="proof-text">Trusted by enterprises across India</p>
            </div>
          </section>
        )}

        {/* Slide 6: CTA */}
        {slide === 6 && (
          <section className="slide cta-slide">
            <div className="slide-content">
              <h2 className="slide-title">{slides[6].title}</h2>
              <p className="slide-subtitle">{slides[6].subtitle}</p>
              
              <ContactFormComponent />

              <div className="contact-info">
                <p>📧 hivewearstore@gmail.com</p>
                <p>📍 Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="nav-controls">
        <button 
          className="nav-button prev"
          onClick={prevSlide}
          disabled={slide === 0}
        >
          ← Previous
        </button>

        <div className="slide-indicator">
          <span className="current">{slide + 1}</span>
          <span className="total">/ {slides.length}</span>
        </div>

        <button 
          className="nav-button next"
          onClick={nextSlide}
          disabled={slide === slides.length - 1}
        >
          Next →
        </button>
      </div>

      {/* Slide Dots */}
      <div className="slide-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === slide ? 'active' : ''}`}
            onClick={() => {
              setSlide(i);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          ></button>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="decoration deco-1"></div>
      <div className="decoration deco-2"></div>
      <div className="decoration deco-3"></div>
    </div>
  );
}