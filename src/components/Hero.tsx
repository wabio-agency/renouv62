export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 lg:pt-44 lg:pb-32 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <div className="hero-reveal inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8700A]" />
              <span className="text-[#E8700A] text-sm font-medium">
                Pas-de-Calais (62)
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-reveal hero-reveal-delay-1 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-800 leading-[1.1] mb-6">
              Renovation, Facades
              <br />
              <span className="text-[#E8700A]">&amp; Travaux du Batiment</span>
            </h1>

            {/* Description */}
            <p className="hero-reveal hero-reveal-delay-2 text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              Renovation de facade, demolition, isolation, sablage &mdash; nous
              transformons vos projets en realite avec expertise et
              professionnalisme.
            </p>

            {/* CTAs */}
            <div className="hero-reveal hero-reveal-delay-3 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:0633929376"
                className="flex items-center gap-3 bg-[#E8700A] hover:bg-[#c45d08] text-white font-bold px-7 py-4 rounded-xl text-lg transition-all shadow-lg shadow-[#E8700A]/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                06 33 92 93 76
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-7 py-4 rounded-xl text-lg transition-all"
              >
                Nos services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="hero-reveal hero-reveal-delay-4 mt-10 flex flex-wrap gap-5 text-sm text-slate-500">
              {["Devis gratuit", "Intervention rapide", "Artisans qualifies"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#E8700A]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — Image placeholder */}
          <div className="hero-reveal hero-reveal-delay-2 relative">
            <div className="aspect-[3/3] lg:aspect-[4/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden relative">
              {/* IMAGE PLACEHOLDER: Remplacez par une vraie photo de chantier/facade */}
              <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <svg className="w-14 h-14 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <span className="text-sm font-medium">hero-bg.jpg</span>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-5 -left-5 bg-[#E8700A] text-white rounded-xl px-5 py-4 shadow-lg shadow-[#E8700A]/20 hidden sm:block">
              <div className="text-2xl font-extrabold">10+</div>
              <div className="text-orange-100 text-sm">ans d&apos;experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
