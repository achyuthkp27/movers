'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapConfig';
import FooterSection from '@/components/sections/FooterSection';

const workData = {
  'local-shifting': {
    title: 'Local Shifting',
    desc: 'Seamless moves within the city. We managed a complex relocation for a prominent tech firm, ensuring zero downtime and complete protection for all their delicate equipment and sensitive data.',
    img: '/gallery/move-2.png',
    challenge: 'Relocating a 200-person tech office over a single weekend with zero room for error in server reconnection.',
    solution: 'A meticulously phased plan with three specialized teams working in tandem: one for packing, one for logistics, and one for IT reconnection.',
    results: ['200+ Workstations Moved', 'Zero Equipment Damage', 'Live by 8:00 AM Monday', 'Client Satisfaction: 100%']
  },
  'interstate-relocation': {
    title: 'Interstate Relocation',
    desc: 'Premium long-distance transport. Moving across state lines requires precision and robust logistics. We executed a flawless interstate move, maintaining constant communication and GPS tracking throughout the journey.',
    img: '/gallery/move-3.png',
    challenge: 'Transporting high-value household items across 1,200 miles through varying weather conditions and tight security protocols.',
    solution: 'Climate-controlled, GPS-tracked vehicles with two-driver teams to ensure continuous movement and 24/7 monitoring of cargo status.',
    results: ['1,200 Miles Traveled', 'Climate Stability Maintained', 'Real-time GPS Monitoring', 'Delivered 4 Hours Early']
  },
  'corporate-relocation': {
    title: 'Corporate Relocation',
    desc: 'Zero downtime office moves. Our strategic planning allowed this large enterprise to transition to their new headquarters seamlessly. We coordinated weekend shifts to ensure operations continued uninterrupted on Monday morning.',
    img: '/gallery/move-4.png',
    challenge: 'Coordinating the move of heavy manufacturing equipment alongside sensitive executive offices.',
    solution: 'Utilization of specialized heavy-lift cranes and air-ride suspension trucks, combined with white-glove executive concierge service.',
    results: ['50 Tons of Equipment', '15 Executive Offices', 'No Business Disruption', 'Safe Handling Guaranteed']
  },
  'vehicle-transport': {
    title: 'Vehicle Transport',
    desc: 'Secure door-to-door auto delivery. We provided enclosed transport for a collection of vintage automobiles, adhering to the strictest safety protocols and delivering them in pristine condition to their new home.',
    img: '/gallery/move-1.png',
    challenge: 'Shipping six vintage, high-clearance collector cars that required specialized loading and zero exposure to road debris.',
    solution: 'Enclosed hard-shell carriers with hydraulic low-profile lift gates and custom soft-tie restraints.',
    results: ['6 Collector Vehicles', 'Enclosed Protection', 'Pristine Condition on Arrival', 'Full Insurance Coverage']
  },
};

export default function WorkDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const containerRef = useRef(null);
  
  const data = workData[slug];

  useEffect(() => {
    if (data && containerRef.current) {
      gsap.fromTo(
        '.detail-animate',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [data]);

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Project not found.</h2>
      </div>
    );
  }

  return (
    <>
      
      <main ref={containerRef} style={{ minHeight: '100vh', paddingTop: '15vh' }}>
        <div className="container" style={{ paddingBottom: '5rem' }}>
          
          {/* Back Button */}
          <button 
            className="detail-animate"
            onClick={() => router.back()}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--fg)',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '3rem',
            }}
          >
            ← Back to Work
          </button>

          {/* Title */}
          <h1 
            className="detail-animate"
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              lineHeight: 1,
              marginBottom: '2rem'
            }}
          >
            {data.title}
          </h1>

          {/* Hero Image */}
          <div 
            className="detail-animate"
            style={{
              width: '100%',
              height: '60vh',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              marginBottom: '3rem'
            }}
          >
            <img 
              src={data.img} 
              alt={data.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Description Content */}
          <div 
            className="detail-animate"
            style={{
              maxWidth: '800px',
              margin: '0 auto 5rem auto',
            }}
          >
            <p className="text-body" style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--fg-subtle)' }}>
              {data.desc}
            </p>
          </div>

          {/* New Content: Challenge & Solution Section */}
          <div className="detail-animate" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '5rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1.5rem' }}>The Challenge</h2>
              <p className="text-body" style={{ opacity: 0.8 }}>{data.challenge}</p>
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1.5rem' }}>The Solution</h2>
              <p className="text-body" style={{ opacity: 0.8 }}>{data.solution}</p>
            </div>
          </div>

          {/* New Content: Results Section */}
          <div className="detail-animate" style={{ marginTop: '8rem', padding: '4rem', background: 'var(--accent)', color: 'var(--bg)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>The Results</h2>
                <p style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Project Outcome</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                {data.results.map((result, i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--bg)', paddingLeft: '1.5rem' }}>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Content: CTA Section */}
          <div className="detail-animate" style={{ marginTop: '10rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Interested in a similar result?</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem' }}>Let's plan your <br/> perfect move together.</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="https://wa.me/911800123456" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1.2rem 2.5rem' }}>WhatsApp Now</a>
              <button onClick={() => router.push('/#booking')} className="btn-outline" style={{ padding: '1.2rem 2.5rem' }}>Get Started</button>
            </div>
          </div>

        </div>
      </main>

      <FooterSection />
    </>
  );
}
