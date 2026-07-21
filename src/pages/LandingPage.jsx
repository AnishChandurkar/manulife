import React, { useEffect, useState } from 'react';

export default function LandingPage() {
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    // Micro-interaction for hero cards entry
    const timer = setTimeout(() => {
      setCardsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-[20s] hover:scale-110" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8qxxm3QaBiRVwMr5a7O2sJHglwwwI-WTT_vOZK-_wDscX2tEqWqokZy_i-OacV-7jIDD8203O9FkIj-98Klt-DLq5dBwwl3BKxGcPCSYBEWKko6gfCzgHxCBX2EwUs6FZz0N5RwCVSpOkPUSF3yvNtJ4Zw_Key5JOAbhCyKV2c7avkiT6ql26UBYzc6YOAKpJlh4ik5VZ8ElmtMlGJMWviFSbzL8VNTXahBCh_BGMqhBYqBN-MmiAQKxD83ZIUvpgamqcZI88Kwuj')" 
            }}
          ></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-8 z-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center gap-4">
            <h2 className="text-white font-bold mb-2 opacity-90 text-[24px]">Manulife</h2>
            <h1 className="text-white leading-tight max-w-xl text-[48px] font-bold">
              Can cloud <span className="italic font-normal">gazing</span> boost your mood?
            </h1>
            <p className="text-white/80 text-lg max-w-md">
              Studies show cloud gazing can ease anxiety and promote mental clarity in high-performance environments.
            </p>
            <div className="mt-8">
              <button className="bg-cta-coral text-white font-semibold text-[20px] px-10 py-4 rounded-lg hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 active:translate-y-0">
                Learn more
              </button>
            </div>
          </div>
          {/* Hero Right Content (Floating Cards) */}
          <div className="hidden lg:col-span-5 lg:flex flex-col justify-center gap-6">
            <div 
              className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 transition-all duration-1000"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateX(12px)' : 'translateX(70px)',
              }}
            >
              <h3 className="text-on-surface font-semibold text-[24px] mb-2">Travel advisories and updates</h3>
              <p className="text-on-surface-variant text-[14px] mb-4">Recent global events may affect your travel insurance coverage. Stay informed with our real-time portal.</p>
              <a className="text-secondary font-bold flex items-center gap-2 group hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-secondary transform group-hover:translate-x-1 transition-transform">arrow_circle_right</span>
                Review travel updates
              </a>
            </div>
            <div 
              className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 transition-all duration-[1200ms]"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateX(20px)' : 'translateX(90px)',
              }}
            >
              <h3 className="text-on-surface font-semibold text-[24px] mb-2">Find an advisor</h3>
              <p className="text-on-surface-variant text-[14px] mb-4">Talk things through with a certified Manulife advisor near you to secure your financial future.</p>
              <a className="text-secondary font-bold flex items-center gap-2 group hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-secondary transform group-hover:translate-x-1 transition-transform">arrow_circle_right</span>
                Connect today
              </a>
            </div>
            <div 
              className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 transition-all duration-[1400ms]"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateX(12px)' : 'translateX(110px)',
              }}
            >
              <h3 className="text-on-surface font-semibold text-[24px] mb-2">Exclusive Memberships</h3>
              <p className="text-on-surface-variant text-[14px] mb-4">Costco, Alumni or Association members can save significantly on premium insurance plans.</p>
              <a className="text-secondary font-bold flex items-center gap-2 group hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-secondary transform group-hover:translate-x-1 transition-transform">arrow_circle_right</span>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Content Section */}
      <section className="py-20 bg-surface-gray">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-on-surface font-bold text-[32px] mb-2">What's new at Manulife?</h2>
              <p className="text-on-surface-variant text-[16px] max-w-2xl">The latest insights on health, wealth, and planning for the long term, curated for our agency partners and clients.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:underline">
              View all articles
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="h-56 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Swimming pool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0mumL5t3lfZCs4ppF16hk-hr54ygBkO1qINsEOEha-lNC0FtoaJPpKu0GE71hn60RaFNoTEAofg6H7hgc8ilsM-bFmpYxRQqxgc7nBbW2CxffrV5YUeDenZoq_nx61WgPEt3cbylnM7Q4LfLrsHwD2YlgA85UPoBfYL7VzOx8ivxfDpZG4S6F17tck2iKCpYtQ_iG-4jZefUK299w3aOF3VjQ5tZ1alEJfVblYHqo91T8PfXxegcKXEedqHH_hdTcl6_XZXQhDTX6" />
                <div className="absolute top-4 left-4 bg-primary text-white text-[12px] font-bold px-3 py-1 rounded-full">Wellness</div>
              </div>
              <div className="p-6">
                <span className="text-on-surface-variant text-[14px]">Oct 24, 2023 • 5 min read</span>
                <h3 className="text-on-surface font-semibold text-[24px] mt-2 mb-4 group-hover:text-primary transition-colors">How regular swimming boosts cognitive longevity</h3>
                <p className="text-on-surface-variant text-[14px] line-clamp-2">New studies suggest that low-impact aquatic exercise can improve memory retention and overall heart health in seniors.</p>
              </div>
            </div>
            {/* News Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="h-56 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Walking on beach" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbzcvNtozeJYWuU7eC-DZa3jXQ-LUelLwc66rY9IjShBaB5vXVryRNJHM_L4mc1gNrfZ15wcJeVRG0DCa2vuIMDAmUuboFowmJS9-_GhHYOHKbyLA8SE3rgc1kU1GHaGUSQpurdNupZuxWxYqGSoIGnDCkNlIV7_a29ivQCS9EUG6I8rDi_qeNYfXFxHmV8uBwhKbzVwZp4S_V06yOU4Wt1tgu2BB6-mtBUhLn8IAWKqYI3XTCT7CTGirnhhcPxECqRzxbl3cv2PoE" />
                <div className="absolute top-4 left-4 bg-secondary text-white text-[12px] font-bold px-3 py-1 rounded-full">Retirement</div>
              </div>
              <div className="p-6">
                <span className="text-on-surface-variant text-[14px]">Oct 21, 2023 • 8 min read</span>
                <h3 className="text-on-surface font-semibold text-[24px] mt-2 mb-4 group-hover:text-primary transition-colors">Planning for the lifestyle you've always imagined</h3>
                <p className="text-on-surface-variant text-[14px] line-clamp-2">Financial stability is only half the battle. Discover how to emotionally prepare for the transition into retirement.</p>
              </div>
            </div>
            {/* News Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="h-56 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Glacial river" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnJSoJ_gHM8t39b0ZYHey-MfaoZo4SdWNxJzrNRq9e0q_2gqHgBkJ4tgtJqJRBsklpXFDVHKoJOMBAvC26RVky2QGX9Jpt3aQYUYJRV6E2xx72C2ykjEBcz2973GNQwNjH1KZDDnVPOwe678H13PLVKKSPWwn1caOB2nCus21G2UVhJfurhLjWNvADRaqVAiqJDUhLV0H8CqWyZQIILIKBXM8ppEs3KhxyI0KZokP29Ydn0u6QTtERLz4GPHYkrDkTwuwN9NknnwMd" />
                <div className="absolute top-4 left-4 bg-[#6f9b80] text-white text-[12px] font-bold px-3 py-1 rounded-full">Sustainability</div>
              </div>
              <div className="p-6">
                <span className="text-on-surface-variant text-[14px]">Oct 18, 2023 • 10 min read</span>
                <h3 className="text-on-surface font-semibold text-[24px] mt-2 mb-4 group-hover:text-primary transition-colors">ESG Investing: The path to responsible wealth growth</h3>
                <p className="text-on-surface-variant text-[14px] line-clamp-2">Our latest report details how environmental, social, and governance factors are reshaping the global investment landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar-bg text-white py-12 px-8 border-t border-white/10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-active-green text-3xl">dataset</span>
              <span className="text-white font-bold tracking-tighter uppercase text-[24px]">Manulife</span>
            </div>
            <p className="text-white/60 text-[14px]">Empowering individuals and businesses to make better financial decisions for a secure future.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-[12px]">Insurance</h4>
            <ul className="flex flex-col gap-3 text-white/70 text-[14px]">
              <li><a className="hover:text-active-green" href="#">Life Insurance</a></li>
              <li><a className="hover:text-active-green" href="#">Health &amp; Dental</a></li>
              <li><a className="hover:text-active-green" href="#">Travel Insurance</a></li>
              <li><a className="hover:text-active-green" href="#">Critical Illness</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-[12px]">Investing</h4>
            <ul className="flex flex-col gap-3 text-white/70 text-[14px]">
              <li><a className="hover:text-active-green" href="#">Mutual Funds</a></li>
              <li><a className="hover:text-active-green" href="#">Segregated Funds</a></li>
              <li><a className="hover:text-active-green" href="#">Annuities</a></li>
              <li><a className="hover:text-active-green" href="#">Group Retirement</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-[12px]">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10" href="#"><span className="material-symbols-outlined text-[20px]">share</span></a>
              <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10" href="#"><span className="material-symbols-outlined text-[20px]">alternate_email</span></a>
              <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10" href="#"><span className="material-symbols-outlined text-[20px]">podcasts</span></a>
            </div>
            <p className="text-white/40 text-[11px]">© 2023 The Manufacturers Life Insurance Company. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Persistent Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-primary text-white py-3 px-1 rounded-l-md font-bold text-[12px] uppercase [writing-mode:vertical-lr] hover:pr-4 transition-all duration-300 shadow-lg">
          Feedback
        </button>
      </div>
    </div>
  );
}
