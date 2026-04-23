import ServiceContent from '@/components/ServiceContent';
import { notFound } from 'next/navigation';

const serviceData = {
  'home-relocation': {
    title: 'Home Relocation',
    desc: 'Every detail is handled. Every deadline met. No stress. No scrambling. Just a team that makes sure everything arrives exactly as planned. We provide comprehensive packing, secure transit, and unpacking services tailored to your household needs.',
    src: '/movers/services/home.webp',
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
    src: '/movers/services/office.webp',
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
    src: '/movers/services/vehicle.webp',
    process: [
      { step: '01', title: 'Multi-Point Inspection', text: 'A rigorous 50-point digital inspection before your vehicle is loaded onto our specialized carriers.' },
      { step: '02', title: 'Secure Loading', text: 'Hydraulic lift gates and non-slip surfaces ensure safe loading for even the lowest-clearance sports cars.' },
      { step: '03', title: 'Protected Transit', text: 'Enclosed carriers shield your vehicle from weather, road debris, and curious eyes during transport.' },
      { step: '04', title: 'Doorstep Delivery', text: 'Convenient delivery to your exact location, followed by a final inspection to ensure pristine condition.' }
    ],
    highlights: ['Enclosed & Open Carriers', 'Full Value Protection', 'Expert Loading Crew', 'Vintage Car Specialists']
  },
};

export function generateStaticParams() {
  return [
    { slug: 'home-relocation' },
    { slug: 'office-shifting' },
    { slug: 'vehicle-transport' },
  ];
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = serviceData[slug];

  if (!data) {
    notFound();
  }

  return <ServiceContent data={data} />;
}
