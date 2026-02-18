
import React, { useState, useCallback } from 'react';
import { AppState, ZoneId } from './types';
import Login from './views/Login';
import Home from './views/Home';
import ZoneDetail from './views/ZoneDetail';
import ParkDetail from './views/ParkDetail';
import NavigationMap from './views/NavigationMap';
import GuideProfile from './views/GuideProfile';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    view: 'login',
    selectedZoneId: undefined,
    selectedParkId: undefined,
  });

  const navigateTo = useCallback((view: AppState['view'], zoneId?: ZoneId, parkId?: string) => {
    setState(prev => ({
      ...prev,
      view,
      selectedZoneId: zoneId !== undefined ? zoneId : prev.selectedZoneId,
      selectedParkId: parkId !== undefined ? parkId : prev.selectedParkId,
    }));
  }, []);

  const handleBack = useCallback(() => {
    setState(prev => {
      if (prev.view === 'park') return { ...prev, view: 'zone' };
      if (prev.view === 'zone') return { ...prev, view: 'home' };
      if (prev.view === 'map' || prev.view === 'profile') return { ...prev, view: 'home' };
      return prev;
    });
  }, []);

  const renderView = () => {
    switch (state.view) {
      case 'login':
        return <Login onLogin={() => navigateTo('home')} />;
      case 'home':
        return <Home onSelectZone={(id) => navigateTo('zone', id)} />;
      case 'zone':
        return (
          <ZoneDetail 
            zoneId={state.selectedZoneId!} 
            onBack={handleBack}
            onSelectPark={(parkId) => navigateTo('park', state.selectedZoneId, parkId)} 
          />
        );
      case 'park':
        return (
          <ParkDetail 
            parkId={state.selectedParkId!} 
            onBack={handleBack}
            onBookGuide={() => navigateTo('profile')}
          />
        );
      case 'map':
        return <NavigationMap onBack={handleBack} />;
      case 'profile':
        return <GuideProfile onBack={handleBack} />;
      default:
        return <Home onSelectZone={(id) => navigateTo('zone', id)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-0 md:p-4">
      {renderView()}
    </div>
  );
};

export default App;
