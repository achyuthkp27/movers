'use client';

import { useState, useRef } from 'react';
import Reveal from '@/components/ui/Reveal';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

const faqs = [
  {
    question: 'How do you calculate the moving estimate?',
    answer: 'We use an AI-powered inventory tool that analyzes the volume and weight of your items. For a precise quote, you can also schedule a quick video walkthrough with one of our move coordinators.'
  },
  {
    question: 'Are my belongings insured during the move?',
    answer: 'Yes, every move includes our standard Zero-Damage insurance coverage up to ₹10L. For high-value items like luxury furniture or fine art, we offer premium "Full Value Protection" plans.'
  },
  {
    question: 'How far in advance should I book my move?',
    answer: 'For home relocations, we recommend booking 1-2 weeks in advance. For office shifting, a 4-week lead time is ideal to ensure proper IT strategy and phased coordination.'
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Absolutely. We provide high-quality, eco-friendly packing materials including custom-made crates, double-walled boxes, and specialized protective wrapping for fragile items.'
  },
  {
    question: 'Can I track my move in real-time?',
    answer: 'Yes. Once your move starts, you’ll receive a unique tracking link in your WhatsApp. You can see the live GPS location of our vehicle and the estimated time of arrival at your new destination.'
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.to(contentRef.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.5,
      ease: 'power3.inOut'
    });
  }, [isOpen]);

  return (
    <div 
      className="faq-item"
      style={{
        borderBottom: '1px solid var(--border)',
        padding: 'var(--space-md) 0',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          gap: 'var(--space-md)',
        }}
      >
        <span className="text-heading-sm" style={{ color: isOpen ? 'var(--accent)' : 'var(--fg)', transition: 'color 0.3s ease' }}>
          {faq.question}
        </span>
        <div style={{
          width: '24px',
          height: '24px',
          position: 'relative',
          flexShrink: 0,
          transition: 'transform 0.5s var(--ease)',
          transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)',
        }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: 'currentColor' }} />
          <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: 'currentColor' }} />
        </div>
      </button>
      
      <div 
        ref={contentRef}
        style={{ height: 0, overflow: 'hidden', opacity: 0 }}
      >
        <p className="text-body" style={{ paddingTop: 'var(--space-sm)', maxWidth: '80%' }}>
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.faq-item', {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section" id="faq">
      <div className="container">
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3">common<br />questions</Reveal>
          </div>
          <div className="section-title__right">
            <h4 className="text-body" style={{ color: 'var(--fg-muted)' }}>
              Everything you need to know about<br />
              moving with SwiftMove. Clear, simple,<br />
              and transparent.
            </h4>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
