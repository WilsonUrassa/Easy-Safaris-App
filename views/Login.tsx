
import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="relative w-full max-w-md h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs5tDO3UysTU-vX4jdk5DEy5xIfyCR_It5KJYhg0XRMgUqYl5bRHk_qp_YrqPf7pKf3rfGPm3QjhdgivOVCNEgLMKDrGZV8-3ko_MRCrAeXEBZp3bNN8fTVaTKwb4gT4NLwHy7X4a52_IUEcwGVSco94JaRqvgVYl7OX5hPik8ewAm1NKEAHed3ZgWc0yQN_pT4HFVqk4h94GW9yazxRy5g3CZb4k9IiDDRLQEe2UrB3oJpbEcGVapSu3gBzNRZ2doDA5q8Eh_mg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-background-dark/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-8">
        {/* Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md mb-4 border border-primary/30">
            <span className="material-symbols-outlined text-primary text-4xl">explore</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight drop-shadow-md">Easy Safaris</h1>
          <p className="text-white/80 font-medium tracking-wide mt-1 uppercase text-xs">Official Professional Portal</p>
        </div>

        {/* Form Card */}
        <div className="glass-panel rounded-xl p-8 shadow-2xl border border-white/20">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-background-dark mb-1.5 ml-1">Username or Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-background-dark/40 text-[20px]">person</span>
                <input 
                  className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-background-dark/10 bg-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-background-dark placeholder:text-background-dark/30" 
                  placeholder="guide.name@serengeti.go" 
                  type="text" 
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 ml-1">
                <label className="block text-sm font-semibold text-background-dark">Password</label>
                <a className="text-xs font-bold text-primary hover:underline" href="#">Forgot?</a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-background-dark/40 text-[20px]">lock</span>
                <input 
                  className="w-full pl-10 pr-12 py-3.5 rounded-lg border border-background-dark/10 bg-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-background-dark placeholder:text-background-dark/30" 
                  placeholder="••••••••" 
                  type="password" 
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-background-dark/40 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>

            <button 
              onClick={onLogin}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Sign In to Portal</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-background-dark/10"></div>
              <span className="flex-shrink mx-4 text-xs font-bold text-background-dark/40 uppercase tracking-widest">or</span>
              <div className="flex-grow border-t border-background-dark/10"></div>
            </div>

            <button className="w-full bg-white border border-primary/40 hover:border-primary text-background-dark font-semibold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">badge</span>
              <span>Sign in with Guide ID</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-white/70 text-sm">
            Not a registered guide? <a className="text-white font-bold hover:text-primary transition-colors underline underline-offset-4" href="#">Apply for Access</a>
          </p>
          <div className="flex items-center justify-center gap-2 text-white/50">
            <span className="material-symbols-outlined text-[16px]">shield_lock</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">Secure Encrypted Environment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
