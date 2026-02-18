
import React from 'react';
import Layout from '../components/Layout';

interface GuideProfileProps {
  onBack: () => void;
}

const GuideProfile: React.FC<GuideProfileProps> = ({ onBack }) => {
  return (
    <Layout activeTab="profile" onNavigate={() => {}} onBack={onBack} title="Guide Portfolio">
      <div className="flex p-6 flex-col items-center">
        <div className="relative">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5vCFMCcv1E_NOzw93dxWP1afQlReY5eiuJP55v0VB6a3W-iQZblFCh1gndHedTE09GcarsHo5V_J4BKQAYmKaWIcT7xIWfbrzQvgvxJErSFZFffAazpQW2z5oQeevkwM5RC4-c5KVxtD_uAtvVMPT5xngt_nI0zGaB5hHsiO1kMIdUUFDC8USKedkzE0vAT5R6ppJgzuZi4WzE6CU26q2-NuXkJxNhPgbGx--1uiB6gheG3ITT0uGaclNM9lBDkNQ07m7ii2XkA')" }}
          />
          <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full flex items-center justify-center border-2 border-white">
            <span className="material-symbols-outlined text-[16px] fill-1">verified</span>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 w-full">
          <h1 className="text-[#111813] text-2xl font-extrabold leading-tight tracking-tight text-center">Juma Rashid</h1>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-primary font-bold text-sm tracking-wide uppercase">Senior Lead Guide</span>
          </div>
          <p className="text-slate-500 text-sm font-medium mt-1">Certified Professional • Arusha, Tanzania</p>
          
          {/* Social Media Links Section */}
          <div className="flex gap-4 mt-4">
            <a 
              href="#" 
              aria-label="Personal Website"
              className="flex size-9 items-center justify-center rounded-full bg-background-light border border-primary/10 text-slate-600 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-background-light border border-primary/10 text-slate-600 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">camera_alt</span>
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-full bg-background-light border border-primary/10 text-slate-600 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">work</span>
            </a>
            <a 
              href="#" 
              aria-label="Contact"
              className="flex size-9 items-center justify-center rounded-full bg-background-light border border-primary/10 text-slate-600 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">alternate_email</span>
            </a>
          </div>

          {/* Contact Details Section */}
          <div className="mt-6 w-full max-w-xs space-y-2">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">Phone Number</p>
                <p className="text-sm font-bold text-[#111813]">0657856236</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">Direct Email</p>
                <p className="text-sm font-bold text-[#111813]">juma.rashid@easysafaris.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-4 mb-6">
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl p-4 bg-background-light border border-primary/10">
          <span className="material-symbols-outlined text-primary">calendar_today</span>
          <p className="text-[#111813] text-lg font-bold">12</p>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider text-center leading-none">Years Exp.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl p-4 bg-background-light border border-primary/10">
          <span className="material-symbols-outlined text-primary">landscape</span>
          <p className="text-[#111813] text-lg font-bold">8</p>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider text-center leading-none">Parks</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl p-4 bg-background-light border border-primary/10">
          <span className="material-symbols-outlined text-primary">hiking</span>
          <p className="text-[#111813] text-lg font-bold">250+</p>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider text-center leading-none">Treks Led</p>
        </div>
      </div>

      <div className="px-4 py-4">
        <h3 className="text-[#111813] text-lg font-bold leading-tight tracking-tight mb-4">Certifications</h3>
        <div className="space-y-3">
          {[
            { title: 'High-Altitude Rescue', subtitle: 'Red Cross International Certified', icon: 'medical_services' },
            { title: 'Big Five Tracking Expert', subtitle: 'Wildlife Conservation Society', icon: 'pets' },
            { title: 'Multi-Language Specialist', subtitle: 'English, Swahili, German, French', icon: 'translate' }
          ].map(cert => (
            <div key={cert.title} className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:border-primary/30 transition-colors">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">{cert.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-[#111813] text-sm font-bold">{cert.title}</p>
                <p className="text-slate-500 text-xs">{cert.subtitle}</p>
              </div>
              <span className="material-symbols-outlined text-primary/40 text-sm">check_circle</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 mb-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#111813] text-lg font-bold leading-tight tracking-tight">Achievements</h3>
          <span className="text-primary text-xs font-bold uppercase cursor-pointer">View All</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {[
            { title: 'Mt. Kilimanjaro', color: 'orange', icon: 'filter_hdr' },
            { title: 'Serengeti Expert', color: 'green', icon: 'nature_people' },
            { title: 'Ngorongoro', color: 'blue', icon: 'water_drop' }
          ].map(badge => (
            <div key={badge.title} className="flex flex-col items-center gap-2 min-w-[100px] shrink-0">
              <div className={`size-16 rounded-full bg-${badge.color}-100 flex items-center justify-center border-4 border-${badge.color}-50 shadow-sm`}>
                <span className={`material-symbols-outlined text-${badge.color}-600 text-3xl`}>{badge.icon}</span>
              </div>
              <p className="text-[#111813] text-[11px] font-bold text-center">{badge.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">event_available</span>
          Book Juma for a Safari
        </button>
      </div>
    </Layout>
  );
};

export default GuideProfile;
