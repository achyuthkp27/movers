'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import FooterSection from '@/components/sections/FooterSection';

const FluidCanvas = dynamic(() => import('@/components/FluidCanvas'), { ssr: false });
const ChatBot = dynamic(() => import('@/components/smart/ChatBot'), { ssr: false });

export default function WorkPage() {
  // Temporary generic grid data
  const projects = [
    { slug: 'local-shifting', title: 'Local Shifting', desc: 'Seamless moves within the city', img: '/gallery/move-2.png' },
    { slug: 'interstate-relocation', title: 'Interstate Relocation', desc: 'Premium long-distance transport', img: '/gallery/move-3.png' },
    { slug: 'corporate-relocation', title: 'Corporate Relocation', desc: 'Zero downtime office moves', img: '/gallery/move-4.png' },
    { slug: 'vehicle-transport', title: 'Vehicle Transport', desc: 'Secure door-to-door auto delivery', img: '/gallery/move-1.png' },
  ];

  return (
    <ErrorBoundary>
      <FluidCanvas />

      <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: '15vh' }}>
        <div className="container" style={{ paddingBottom: '5rem' }}>
          <div className="section-title">
            <div className="section-title__left">
              <h3>our <br/> work</h3>
            </div>
            <div className="section-title__right">
              <h4 style={{ color: 'var(--fg-muted)' }}>
                Discover our premium moving experiences. We handle every detail so you don't have to.
              </h4>
            </div>
          </div>
          
          <div className="grid-2" style={{ marginTop: '3rem' }}>
            {projects.map((project, idx) => (
              <Link key={idx} href={`/work/${project.slug}`} style={{ display: 'block' }}>
                <div 
                  className="project-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                    cursor: 'pointer'
                  }}
                >
                  <div 
                    data-cursor="view"
                    style={{
                    width: '100%',
                    height: '60vh',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={project.img} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div>
                    <h2 className="text-heading-sm mb-2">{project.title}</h2>
                    <p className="text-body">{project.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
      <ChatBot />
    </ErrorBoundary>
  );
}
