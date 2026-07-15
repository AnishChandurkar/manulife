import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roles, usePrototype } from '../context/PrototypeContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const navigate = useNavigate();
  const { role, setRole } = usePrototype();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login and navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <main className="w-full h-screen flex flex-col md:flex-row bg-[#f7faf8]">
      {/* Left Side: Brand Visual */}
      <section className="hidden md:flex w-1/2 bg-sidebar-bg relative overflow-hidden items-center justify-center">
        <div className="relative z-10 px-16 text-white space-y-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-active-green flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
            </div>
            <span className="font-semibold text-[24px] tracking-tight">Manulife</span>
          </div>
          <h1 className="font-bold text-[48px] leading-tight">Empowering Agency <br /><span className="text-active-green">Performance.</span></h1>
          <p className="text-lg text-white/70 max-w-md">
            Access the next-generation digital platform designed specifically for advisors. Manage proposals, claims, and client portfolios with AI-driven insights.
          </p>
          <div className="flex flex-col gap-6 pt-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-active-green">auto_awesome</span>
              </div>
              <p className="text-[14px] font-medium">AI-Powered Copilot assistance</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-active-green">insights</span>
              </div>
              <p className="text-[14px] font-medium">Real-time performance analytics</p>
            </div>
          </div>
        </div>
        {/* Absolute positioned decorative image/texture */}
        <div 
          className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkgcoIn4mpmWQtJvuA8uf9RcPogOBBCA9VWiJ3d-4NgjY2iQ8qEBBHWMyxts2Ib2u5WnBm6lc-op7WU_zW4wm43xpMs9QKFjudJuZKs7p5A2mXhRjF_rof7CebrvlN6aUV_zG_DafxL6BHFvunpmxc4aoik6AhjnhuL6Le6czpJvLyXRAJWeIiiHvuPfdRE803sFerL5Pp9GDqLesMUhQGtZkwDkXqgAUvb8JbCX-v5Aop1-WaX1jG0B0A_GzC0TSXMgV7jtzTSqei')" }}
        ></div>
      </section>

      {/* Right Side: Login Form */}
      <section className="w-full md:w-1/2 bg-[#f7faf8] flex flex-col items-center justify-center px-6 md:px-24 py-12 relative">
        {/* Mobile Logo */}
        <div className="md:hidden absolute top-10 left-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-active-green flex items-center justify-center rounded">
            <span className="material-symbols-outlined text-white text-xl">account_balance</span>
          </div>
          <span className="font-semibold text-[24px] text-on-surface">Manulife</span>
        </div>
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-[32px] font-semibold text-on-surface">Sign in to Platform</h2>
            <p className="text-[16px] text-on-surface-variant">Welcome back! Please enter your details.</p>
          </div>
          <label className="block text-[14px] font-medium text-on-surface-variant">Demo role
            <select value={role} onChange={(e) => setRole(e.target.value)} className="mt-2 w-full rounded-xl border border-outline-variant bg-white px-4 py-3 text-on-surface">
              {roles.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          {/* SSO Section */}
          <button 
            type="button" 
            onClick={() => navigate('/dashboard')}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-outline-variant rounded-xl bg-white hover:bg-surface-container transition-colors duration-200 group active:scale-[0.99]"
          >
            <span className="material-symbols-outlined text-[#0078D4]">cloud</span>
            <span className="text-[14px] font-medium text-on-surface">Sign in with Microsoft SSO</span>
          </button>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant"></div>
            </div>
            <div className="relative px-4 bg-[#f7faf8]">
              <span className="text-[14px] font-medium text-outline">OR</span>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[14px] font-medium text-on-surface-variant block" htmlFor="email">Email Address</label>
              <div className="relative">
                <span 
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px] transition-colors"
                  style={{ color: isFocused.email ? '#00A758' : '#6d7b6e' }}
                >
                  mail
                </span>
                <input 
                  className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl text-[16px] text-on-surface focus:outline-none focus:border-active-green focus:ring-2 focus:ring-active-green/20 transition-all duration-200" 
                  id="email" 
                  type="email" 
                  placeholder="name@agency.manulife.com" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(prev => ({ ...prev, email: true }))}
                  onBlur={() => setIsFocused(prev => ({ ...prev, email: false }))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-medium text-on-surface-variant block" htmlFor="password">Password</label>
                <a className="text-[14px] font-medium text-primary hover:underline" href="#">Forgot password?</a>
              </div>
              <div className="relative">
                <span 
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px] transition-colors"
                  style={{ color: isFocused.password ? '#00A758' : '#6d7b6e' }}
                >
                  lock
                </span>
                <input 
                  className="w-full pl-12 pr-12 py-3 bg-white border border-outline-variant rounded-xl text-[16px] text-on-surface focus:outline-none focus:border-active-green focus:ring-2 focus:ring-active-green/20 transition-all duration-200" 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))}
                  onBlur={() => setIsFocused(prev => ({ ...prev, password: false }))}
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" 
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input 
                className="w-5 h-5 rounded border-outline-variant text-active-green focus:ring-active-green transition-all duration-200 cursor-pointer" 
                id="remember" 
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label className="ml-3 text-[14px] font-medium text-on-surface-variant cursor-pointer select-none" htmlFor="remember">Remember me on this device</label>
            </div>
            <button 
              className="w-full py-4 bg-active-green text-white font-bold text-[16px] rounded-xl shadow-lg shadow-active-green/20 hover:bg-primary transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2" 
              type="submit"
            >
              Sign In
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
          <div className="text-center pt-4">
            <p className="text-[16px] text-on-surface-variant">
              Don't have an account? 
              <a className="text-[14px] font-bold text-primary ml-1 hover:underline" href="#">Sign up</a>
            </p>
          </div>
        </div>
        {/* Footer info */}
        <footer className="absolute bottom-10 text-center w-full max-w-md px-6">
          <div className="flex justify-center gap-6 mb-4">
            <a className="text-[14px] font-medium text-outline hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
            <a className="text-[14px] font-medium text-outline hover:text-on-surface transition-colors" href="#">Terms of Use</a>
            <a className="text-[14px] font-medium text-outline hover:text-on-surface transition-colors" href="#">Support</a>
          </div>
          <p className="text-[12px] text-outline">© 2024 Manulife. All rights reserved. For internal agency use only.</p>
        </footer>
      </section>
    </main>
  );
}
