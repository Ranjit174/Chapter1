import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import ControlPanelManufacturing from '@/components/ControlPanelManufacturing';
import CustomerExperiences from '@/components/CustomerExperiences';
import Partners from '@/components/Partners';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: "IndustrialTEK | Automation, Machine Building & Industrial Software",
  description: "Your partner for industrial automation. We specialize in SPM building, PLC programming, electrical control panels, CNC retrofitting, OEE software, and lean manufacturing implementation.",
  keywords: ['industrial control panel manufacturer', 'custom control panel builder', 'UL 508A panel shop', 'electrical engineering services', 'control panel fabrication', 'iAutomation'],
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