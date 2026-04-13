export default function About() {
  const stats = [
    { value: "10+", label: "Annees d'experience" },
    { value: "500+", label: "Projets realises" },
    { value: "100%", label: "Clients satisfaits" },
    { value: "62", label: "Pas-de-Calais" },
  ];

  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            {/* IMAGE PLACEHOLDER: Photo de l'equipe ou d'un chantier */}
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <span className="text-sm font-medium">Photo equipe / chantier</span>
                  <br />
                  <span className="text-xs">about-image.jpg (800x600)</span>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
              <div className="text-4xl font-extrabold">10+</div>
              <div className="text-orange-100 text-sm font-medium">
                ans d&apos;experience
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">
              Qui sommes-nous
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-3 mb-6">
              Votre partenaire de confiance pour tous vos travaux
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Basee dans le Pas-de-Calais, <strong className="text-slate-700">Renouv62</strong> est
              une entreprise specialisee dans les travaux de renovation, de ravalement de facade et
              de construction. Notre equipe d&apos;artisans qualifies intervient sur tout type de
              projet, du plus petit au plus ambitieux.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Nous mettons un point d&apos;honneur a fournir un travail de qualite, dans le respect
              des delais et du budget. Chaque chantier est unique et merite une attention
              particuliere — c&apos;est pourquoi nous vous accompagnons de A a Z.
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-10">
              {[
                "Devis gratuit et sans engagement",
                "Artisans qualifies et experimentes",
                "Respect des delais et du budget",
                "Garantie decennale sur nos travaux",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-600 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:0633929376"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
            >
              Contactez-nous
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-800 rounded-2xl p-8 md:p-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-orange-500">{stat.value}</div>
              <div className="text-slate-300 mt-2 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
