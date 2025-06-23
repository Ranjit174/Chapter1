import type { Metadata } from 'next';
import LatestNewsClientPage from '@/components/LatestNewsClientPage';

export const metadata: Metadata = {
  title: "Latest News in Industrial Automation | IndustrialTEK Blog",
  description: "Stay updated with the latest trends in industrial automation, lean manufacturing, Six Sigma, and Industry 4.0. Insights from the experts at IndustrialTEK.",
};

const LatestNewsPage = () => {
  return <LatestNewsClientPage />;
};

export default LatestNewsPage;