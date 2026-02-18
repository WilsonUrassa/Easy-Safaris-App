
import React from 'react';
import { AppState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: AppState['view'];
  onNavigate: (view: AppState['view']) => void;
  showHeader?: boolean;
  title?: string;
  onBack?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeTab, 
  onNavigate, 
  showHeader = true, 
  title = "Easy Safaris",
  onBack
}) => {
  return (
    <div className="relative mx-auto min-h-screen max-w-md bg-white shadow-2xl flex flex-col">
      {showHeader && (
        <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {onBack ? (
              <button onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-light text-[#111813]">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            ) : (
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20">
                <img alt="Guide profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNqZ-gBICNqXSzkID1N7OyWrhNRKrmwUSVLtazJ7hmjPYLk2_7RReaxjxDYIj1mlfNjqhTc4t46V_TdjT30nOA8GdeJzxBqgXTz3Fe7cvAel8PUNTFD4pcQlq2QVBcDz6FRS-xlR_-UxRsU_PzkzrJdI_1DmHK9_MXuezJezBAmYwMi45rS-g4MRizEwH8nx4blwa1-ZVgBtjjusDbbY08ZqvAEUQqoRqQ0N3gZQL5zZSfUx-s1qRk3hBzEGwRDAWTplFks9ljg" />
              </div>
            )}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#61896b] leading-none mb-1">
                {onBack ? "Easy Safaris" : "Welcome back"}
              </p>
              <h1 className="text-lg font-bold leading-none">{title}</h1>
            </div>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-background-light text-[#111813]">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </header>
      )}

      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>

      {activeTab !== 'login' && (
        <nav className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-[#f0f4f1] bg-white px-6 pb-6 pt-3 flex justify-between items-center z-20 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
          <button onClick={() => onNavigate('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' || activeTab === 'zone' ? 'text-primary' : 'text-[#61896b]'}`}>
            <span className={`material-symbols-outlined ${activeTab === 'home' ? 'fill-1' : ''}`}>explore</span>
            <span className="text-[10px] font-bold">Explore</span>
          </button>
          <button onClick={() => onNavigate('map')} className={`flex flex-col items-center gap-1 ${activeTab === 'map' ? 'text-primary' : 'text-[#61896b]'}`}>
            <span className={`material-symbols-outlined ${activeTab === 'map' ? 'fill-1' : ''}`}>map</span>
            <span className="text-[10px] font-bold">Navigation</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#61896b] opacity-50 cursor-not-allowed">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-[10px] font-bold">Bookings</span>
          </button>
          <button onClick={() => onNavigate('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-primary' : 'text-[#61896b]'}`}>
            <span className={`material-symbols-outlined ${activeTab === 'profile' ? 'fill-1' : ''}`}>person</span>
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default Layout;
