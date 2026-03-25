import { Outlet, useLocation } from 'react-router';
import { StarBackground } from './StarBackground';
import { PlayerStats } from './PlayerStats';
import { CustomCursor } from './CustomCursor';
import { LoadingScreen } from './LoadingScreen';
import { KonamiCode } from './KonamiCode';
import { SoundToggle } from './SoundToggle';
import { useState, useEffect } from 'react';

export function Layout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen only on first load
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasLoaded', 'true');
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-[var(--space-dark)] text-white relative dark">
      <StarBackground />
      <CustomCursor />
      <KonamiCode />
      <SoundToggle />
      
      {/* Show player stats on all screens except start screen */}
      <PlayerStats />
      
      <Outlet />
    </div>
  );
}