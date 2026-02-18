
import React from 'react';
import Layout from '../components/Layout';
import { PARKS } from '../data';

interface ParkDetailProps {
  parkId: string;
  onBack: () => void;
  onBookGuide: () => void;
}

const ParkDetail: React.FC<ParkDetailProps> = ({ parkId, onBack, onBookGuide }) => {
  const park = PARKS.find(p => p.id === parkId);

  if (!park) return null;

  return (
    <Layout activeTab="home" onNavigate={() => {}} onBack={onBack} title="Park Details">
      {/* Hero Header */}
      <section className="relative h-72 w-full overflow-hidden">
        <img alt={park.name} className="h-full w-full object-cover" src={park.image} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-primary px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider">Tanzania</span>
            <div className="flex items-center text-white/90 text-xs">
              <span className="material-symbols-outlined text-xs mr-1 text-primary">star</span>
              {park.rating || '4.8'} (2.4k reviews)
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white leading-tight">{park.name}</h2>
        </div>
      </section>

      {/* Tabs */}
      <nav className="flex overflow-x-auto no-scrollbar border-b border-gray-100 bg-white sticky top-[56px] z-40">
        <a className="flex-none px-6 py-4 text-sm font-bold text-primary border-b-2 border-primary" href="#">Overview</a>
        <a className="flex-none px-6 py-4 text-sm font-bold text-gray-500" href="#">Wildlife</a>
        <a className="flex-none px-6 py-4 text-sm font-bold text-gray-500" href="#">Routes</a>
      </nav>

      {/* Content */}
      <div className="p-4 space-y-8 pb-20">
        <section className="grid grid-cols-3 gap-3">
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary mb-1">height</span>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Elevation</p>
            <p className="text-sm font-extrabold text-[#112215]">{park.elevation || '1,000m'}</p>
          </div>
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary mb-1">calendar_month</span>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Best Time</p>
            <p className="text-sm font-extrabold text-[#112215]">{park.bestTime}</p>
          </div>
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary mb-1">thermostat</span>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Current</p>
            <p className="text-sm font-extrabold text-[#112215]">24°C</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary">description</span>
            Description
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {park.description} Located in the heart of Tanzania's ecosystem, this area offers unparalleled viewing opportunities for both fauna and stunning landscapes.
          </p>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">pets</span>
              Wildlife
            </h3>
            <button className="text-primary text-sm font-bold">See All</button>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-6">
            {['Lion', 'Elephant', 'Buffalo', 'Leopard', 'Rhino'].map((animal, i) => (
              <div key={animal} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                  <span className="material-symbols-outlined text-slate-600 text-lg">
                    {['flight_land', 'ambulance', 'ecg_heart', 'sprint', 'skull'][i]}
                  </span>
                </div>
                <span className="text-[10px] font-bold">{animal}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Map Placeholder */}
        <section>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">route</span>
            Safari Routes
          </h3>
          <div className="relative group mb-4">
            <div className="h-44 w-full rounded-xl overflow-hidden border-2 border-primary/10 bg-slate-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/10">map</span>
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined">download</span>
                  Offline Map Available
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="fixed bottom-24 right-4 z-40">
          <button 
            onClick={onBookGuide}
            className="bg-[#112215] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined">support_agent</span>
            <span className="font-bold text-sm">Book a Lead Guide</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ParkDetail;
