import { useState } from "react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Risque climatique & projection BSCR",
    description:
      "Modèle VBA de simulation climatique pour évaluer l’impact sur le BSCR, avec une analyse des enjeux ORSA en assurance.",
    detailedDescription: `
Ce projet visait à développer un modèle de projection du bilan d’un assureur sous différents scénarios climatiques.
Il s’agit d’évaluer l’impact des variations économiques et environnementales sur le SCR, tout en intégrant les considérations ORSA.

Objectifs principaux :
- Construire un modèle de simulation sous VBA permettant d’estimer le BSCR.
- Intégrer des scénarios climatiques à long terme et leurs effets sur les actifs et passifs.
- Fournir une approche analytique du risque climatique pour la gouvernance actuarielle.
`,
    image: "/projects/project1.jpg",              // image carte
    detailedImage: "/projects/project1-large.jpg", // image modal
    tags: ["VBA", "Modélisation", "Solvabilité II"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Tableau de bord : Produits d’assurance voyage",
    description:
      "Outil de visualisation dynamique facilitant l’analyse et l’interprétation des données.",
    detailedDescription: `
Conception d’un tableau de bord Power BI pour analyser les ventes et les sinistres de contrats d’assurance voyage.
Le projet met l’accent sur la clarté visuelle et la prise de décision rapide grâce à des indicateurs interactifs.

Objectifs principaux :
- Connecter et transformer des données SQL via Power BI.
- Créer des visualisations dynamiques pour suivre la performance.
- Soutenir la prise de décision stratégique pour optimiser les ventes et les produits.
- Fournir un outil d’aide à la décision pour les équipes actuarielles et marketing.
`,
    image: "/projects/project2.jpg",              // image carte
    detailedImage: "/projects/project2-large.jpg", // image modal
    tags: ["Power BI", "SQL", "UI/UX"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ayuri90/travel-insurance-analysis.git",
  },
  {
    id: 3,
    title: "Prédiction du coût ultime des sinistres corporels",
    description:
      "Modélisation statistique pour prédire le coût ultime des sinistres corporels et optimiser la gestion des réserves.",
    detailedDescription: `
Développement d’un modèle prédictif pour estimer le coût ultime des sinistres corporels.
Le modèle repose sur des techniques de machine learning et de régression non linéaire.

Objectifs principaux :
- Collecter et nettoyer des données de sinistres historiques.
- Estimation Prédictive : Développer un modèle capable de prédire le coût ultime des sinistres corporels.
- Exploitation des Données Historiques : Utiliser les données historiques des sinistres pour affiner les prévisions.
- Analyse Textuelle : Appliquer des techniques de text mining sur les descriptions de sinistres pour extraire des indicateurs de sévérité.
- Tester plusieurs approches statistiques (GLM, Random Forest).
- Améliorer la précision du provisionnement en assurance IARD.
`,
    image: "/projects/project3.jpg",              // image carte
    detailedImage: "/projects/project3-large.jpg", // image modal
    tags: ["Python", "ML", "Actuariat"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "TER : Théorie des valeurs extrêmes",
    description:
      "Étude théorique et application de la théorie des valeurs extrêmes pour modéliser les événements rares et évaluer les risques extrêmes.",
    detailedDescription: `
Ce TER explore la théorie des valeurs extrêmes (TVE) appliquée aux sinistres rares dans le domaine de la santé.
Il s’appuie sur l’analyse des distributions de Pareto généralisée (GPD) et la loi générale des valeurs extrêmes.

Objectifs principaux :
- Étudier la distribution des excès et des maximums.
- Appliquer la TVE à des données de sinistres réels.
- Identifier les comportements extrêmes pour mieux évaluer les risques assurantiels.
`,
    image: "/projects/project4.jpg",              // image carte
    detailedImage: "/projects/project4-large.jpg", // image modal
    tags: ["Python", "Statistiques", "Risque santé"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Impact météorologique sur les sinistres automobiles",
    description:
      "Étude statistique et modélisation des effets des conditions météorologiques sur la fréquence et la sévérité des sinistres automobiles.",
    detailedDescription: `
Ce projet explore l'influence des conditions météorologiques sur la fréquence et la sévérité des sinistres automobiles.
Il combine analyse statistique et modélisation prédictive sur des données simulées de sinistres et des simulations météorologiques.

Objectifs principaux :
- Modélisation des Effets Météorologiques : Évaluer comment les conditions météorologiques influencent la survenance et la gravité des sinistres automobiles.
- Simulation de Scénarios : Créer des simulations avec des populations exposées à des conditions homogènes et hétérogènes pour mesurer l'impact climatique.
- Aide à la Décision : Fournir des insights pour aider les assureurs à ajuster leurs politiques de couverture et leurs stratégies de tarification face aux aléas climatiques.
`,
    image: "/projects/project5.jpg",              // image carte
    detailedImage: "/projects/project5-large.jpg", // image modal
    tags: ["R", "Monte Carlo", "Statistiques"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleProjects = () => {
    if (visibleCount < projects.length) {
      setVisibleCount(projects.length);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes <span className="text-primary"> Projets </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voici quelques-uns de mes projets récents, réalisés avec rigueur et souci du détail.
        </p>

        {/* Liste des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons */}
        <div className="text-center mt-12 flex flex-col md:flex-row justify-center gap-4">
          <button onClick={toggleProjects} className="cosmic-button flex items-center gap-2">
            {visibleCount < projects.length ? "Voir plus de projets" : "Voir moins"}
            <ArrowRight size={16} />
          </button>

          <a
            href="https://github.com/Ayuri90"
            target="_blank"
            className="cosmic-button flex items-center gap-2"
          >
            GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal détaillé */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-card w-full max-w-5xl h-[90vh] rounded-lg overflow-hidden relative flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={selectedProject.detailedImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Détails */}
            <div className="md:w-1/2 p-6 overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-muted-foreground text-justify">
                {selectedProject.detailedDescription.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
