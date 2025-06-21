import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import ControlPanelManufacturing from '@/components/ControlPanelManufacturing';
import CustomerExperiences from '@/components/CustomerExperiences';
import Partners from '@/components/Partners';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'iAutomation | Industrial Control Panel Manufacturer & Engineering',
  description: 'Leading industrial control panel manufacturer specializing in custom control panel design, UL 508A listed fabrication, and electrical engineering services for a wide range of industries.',
  keywords: ['industrial control panel manufacturer', 'custom control panel builder', 'UL 508A panel shop', 'electrical engineering services', 'control panel fabrication', 'iAutomation'],
  alternates: {
    canonical: 'https://www.paneltekllc.com/', // Update with your canonical URL
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Industries />
      <ControlPanelManufacturing />
      <CustomerExperiences />
      <Partners />
      <CallToAction />
    </main>
  );
}