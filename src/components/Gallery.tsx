export default function Gallery() {
  const projects = [
    { title: "Ravalement facade - Arras", category: "Facade", placeholder: "gallery-1.jpg" },
    { title: "Extension maison - Lens", category: "Extension", placeholder: "gallery-2.jpg" },
    { title: "Rejointement briques - Bethune", category: "Rejointement", placeholder: "gallery-3.jpg" },
    { title: "Sablage facade - Calais", category: "Sablage", placeholder: "gallery-4.jpg" },
    { title: "Isolation exterieure - Boulogne", category: "Isolation", placeholder: "gallery-5.jpg" },
    { title: "Demolition batiment - Lievin", category: "Demolition", placeholder: "gallery-6.jpg" },
  ];

  return (
    <section id="realisations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">
            Notre portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mt-3 mb-4">
            Nos Realisations
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            Decouvrez quelques-uns de nos projets recents dans le Pas-de-Calais.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* IMAGE PLACEHOLDER: Ajoutez /images/{project.placeholder} */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <span className="text-xs font-medium">{project.placeholder}</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <span className="text-orange-400 text-sm font-semibold">{project.category}</span>
                  <h3 className="text-white text-lg font-bold mt-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
