import { useEffect, useState } from 'react';
import NewHeroSection from './sections/NewHeroSection';
import NewEventDetailsSection from './sections/NewEventDetailsSection';

import NewFooter from './sections/NewFooter';

interface WeddingPageProps {
  showTransition: boolean;
  isOpen: boolean;
}

export default function WeddingPage({ showTransition, isOpen }: WeddingPageProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [isOpen]);

  return (
    <div
      className={`wedding-page ${showTransition ? 'transitioning' : ''} ${fadeIn ? 'fade-in' : ''
        }`}
    >
      <NewHeroSection />
      <NewEventDetailsSection />

      <NewFooter />
    </div>
  );
}
