'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import FooterSection from '@/components/sections/FooterSection';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import Magnetic from '@/components/ui/Magnetic';

const serviceData = {
  'home-relocation': {
    title: 'Home Relocation',
    desc: 'Every detail is handled. Every deadline met. No stress. No scrambling. Just a team that makes sure everything arrives exactly as planned. We provide comprehensive packing, secure transit, and unpacking services tailored to your household needs.',
    src: '/services/home.webp',
    process: [
      { step: '01', title: 'Smart Inventory', text: 'Our AI-powered tool scans your home to create a precise digital inventory, ensuring nothing is left behind.' },
      { step: '02', title: 'White-Glove Packing', text: 'We use custom-made crates and eco-friendly packing materials to protect your most fragile belongings.' },
      { step: '03', title: 'Secure Transit', text: 'Real-time GPS tracking and climate-controlled vehicles ensure your items are safe and sound during the journey.' },
      { step: '04', title: 'Seamless Setup', text: 'We don’t just drop boxes; we help you set up your new home exactly how you want it.' }
    ],
    highlights: ['Licensed & Insured', 'Background-Checked Crew', 'Custom Packing Solutions', 'Real-Time Tracking']
  },
  'office-shifting': {
    title: 'Office Shifting',
    desc: 'We sync with your timeline, your challenges, and your priorities. Zero downtime guaranteed. Your business never stops moving. Our commercial moving teams are trained to handle sensitive IT equipment, modular furniture, and confidential documents with extreme care.',
    src: '/services/office.webp',
    process: [
      { step: '01', title: 'Business Strategy', text: 'We coordinate with your IT and facilities teams to create a phased moving plan that minimizes operational impact.' },
      { step: '02', title: 'IT Asset Management', text: 'Specialized handling and reconnection of servers, workstations, and sensitive electronics by certified technicians.' },
      { step: '03', title: 'After-Hours Execution', text: 'Overnight and weekend moves to ensure your team can resume work the very next business morning.' },
      { step: '04', title: 'Employee Concierge', text: 'Dedicated support for your staff to help them settle into their new workstations quickly.' }
    ],
    highlights: ['Zero Downtime Promise', 'IT Specialists', 'Confidential Handling', 'Asset Inventory Management']
  },
  'vehicle-transport': {
    title: 'Vehicle Transport',
    desc: 'From the road to your door, safety is at the heart of everything we do. Inspected carriers, strict protocols, experienced crew. Whether it is a family car or a luxury sports vehicle, we provide enclosed and open carrier options to ensure safe delivery.',
    src: '/services/vehicle.webp',
    process: [
      { step: '01', title: 'Multi-Point Inspection', text: 'A rigorous 50-point digital inspection before your vehicle is loaded onto our specialized carriers.' },
      { step: '02', title: 'Secure Loading', text: 'Hydraulic lift gates and non-slip surfaces ensure safe loading for even the lowest-clearance sports cars.' },
      { step: '03', title: 'Protected Transit', text: 'Enclosed carriers shield your vehicle from weather, road debris, and curious eyes during transport.' },
      { step: '04', title: 'Doorstep Delivery', text: 'Convenient delivery to your exact location, followed by a final inspection to ensure pristine condition.' }
    ],
    highlights: ['Enclosed & Open Carriers', 'Full Value Protection', 'Expert Loading Crew', 'Vintage Car Specialists']
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const containerRef = useRef(null);
  const data = serviceData[slug];

  useGSAP(() => {
    if (!data) return;

    // Split text reveal for title
    gsap.fromTo('.detail-title-line', {
      y: '100%',
      clipPath: 'inset(0 0 100% 0)'
    }, {
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.2
    });

    // Fade up for content
    gsap.fromTo('.detail-fade', {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.6
    });

    // Image reveal
    gsap.fromTo('.detail-image-wrap', {
      scale: 1.1,
      clipPath: 'inset(10% 10% 10% 10% round var(--radius-lg))'
    }, {
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0% round var(--radius-lg))',
      duration: 1.2,
      ease: 'power4.inOut',
      delay: 0.4
    });

  }, { scope: containerRef, dependencies: [data] });

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
        <h2 className="text-display">404</h2>
        <p className="text-body">Service not found.</p>
        <button onClick={() => router.push('/')} className="btn-primary">Return Home</button>
      </div>
    );
  }

  return (
    <>
      
      <main ref={containerRef} style={{ minHeight: '100vh', paddingTop: 'clamp(8rem, 15vh, 12rem)' }}>
        <div className="container">
          
          {/* Back Navigation */}
          <div className="detail-fade" style={{ marginBottom: 'var(--space-lg)' }}>
            <Magnetic strength={0.2}>
              <button 
                onClick={() => router.back()}
                className="text-small"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--fg-muted)',
                  cursor: 'pointer',
                  padding: '0.5rem 0'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to services
              </button>
            </Magnetic>
          </div>

          {/* Header Section */}
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <h1 className="text-display" style={{ marginBottom: 'var(--space-md)' }}>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="detail-title-line" style={{ display: 'block' }}>{data.title.split(' ')[0]}</span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="detail-title-line" style={{ display: 'block', color: 'var(--accent)' }}>{data.title.split(' ').slice(1).join(' ')}</span>
              </span>
            </h1>
            
            <div className="detail-fade" style={{ maxWidth: '600px' }}>
              <p className="text-body" style={{ fontSize: 'clamp(1.1rem, 1.2vw, 1.4rem)', lineHeight: 1.5 }}>
                {data.desc}
              </p>
            </div>
          </div>

          {/* Hero Image with Cinematic Reveal */}
          <div className="detail-image-wrap" style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '21/9',
            backgroundColor: 'var(--bg-card)',
            marginBottom: 'var(--space-3xl)'
          }}>
            <Image 
              src={data.src} 
              alt={data.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Process Grid */}
          <div style={{ marginBottom: 'var(--space-4xl)' }}>
            <div className="detail-fade" style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>
              <h2 className="text-heading-xl">The Process</h2>
              <p className="text-small" style={{ marginTop: '0.5rem' }}>Precision in every phase</p>
            </div>

            <div className="grid-2" style={{ gap: 'var(--space-xl)' }}>
              {data.process.map((step, idx) => (
                <div key={idx} className="detail-fade" style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  gap: 'var(--space-md)'
                }}>
                  <div className="text-mono" style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700, opacity: 0.5 }}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-heading-sm" style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p className="text-body" style={{ fontSize: '0.95rem' }}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Prop Banner */}
          <div className="detail-fade" style={{ 
            marginBottom: 'var(--space-4xl)',
            padding: 'var(--space-3xl) var(--space-xl)',
            background: 'var(--fg)',
            color: 'var(--bg)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <h2 className="text-heading-lg" style={{ marginBottom: 'var(--space-xl)' }}>White-Glove Standards</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-lg)' }}>
              {data.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '10px', height: '10px', background: 'var(--accent)', borderRadius: '50%' }} />
                  <span className="text-small" style={{ color: 'inherit', fontWeight: 700 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="detail-fade" style={{ textAlign: 'center', paddingBottom: 'var(--space-4xl)' }}>
            <h2 className="text-heading-xl" style={{ marginBottom: 'var(--space-xl)' }}>Ready to move?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Magnetic>
                <a href="https://wa.me/911800123456" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>
                  WhatsApp Quote
                </a>
              </Magnetic>
              <Magnetic>
                <a href="tel:+911800123456" className="btn-outline" style={{ padding: '1.25rem 3rem' }}>
                  Call Coordinator
                </a>
              </Magnetic>
            </div>
          </div>

        </div>
      </main>

      <FooterSection />
    </>
  );
}
