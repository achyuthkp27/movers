import WorkContent from '@/components/WorkContent';
import { notFound } from 'next/navigation';

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

export function generateStaticParams() {
  return [
    { slug: 'local-shifting' },
    { slug: 'interstate-relocation' },
    { slug: 'corporate-relocation' },
    { slug: 'vehicle-transport' },
  ];
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = workData[slug];

  if (!data) {
    notFound();
  }

  return <WorkContent data={data} />;
}
