export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">
              Contactez-nous
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-3 mb-6">
              Demandez votre devis gratuit
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Vous avez un projet de renovation, de ravalement ou de construction ?
              N&apos;hesitez pas a nous contacter pour un devis gratuit et sans engagement.
              Nous vous repondrons dans les plus brefs delais.
            </p>

            {/* Contact cards */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:0633929376"
                className="flex items-center gap-5 p-5 bg-orange-50 border border-orange-100 rounded-xl hover:bg-orange-100 transition-colors group"
              >
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Telephone</div>
                  <div className="text-xl font-bold text-slate-800">06 33 92 93 76</div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-5 p-5 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Horaires</div>
                  <div className="text-lg font-bold text-slate-800">Lun - Sam : 7h - 19h</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 p-5 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Zone d&apos;intervention</div>
                  <div className="text-lg font-bold text-slate-800">Pas-de-Calais (62)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Pret a demarrer votre projet ?
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Appelez-nous directement pour discuter de votre projet et obtenir un devis
                personnalise gratuit.
              </p>
              <a
                href="tel:0633929376"
                className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-5 rounded-xl text-xl transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-105"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                06 33 92 93 76
              </a>
              <p className="text-slate-400 text-sm mt-6">
                Devis gratuit &bull; Sans engagement &bull; Reponse rapide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
