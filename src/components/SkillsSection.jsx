import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Compétences actuarielles
  { name: "Tarification", description: "Construction et ajustement de modèles de tarification en santé, auto et prévoyance.", category: "actuariat" },
  { name: "Provisionnement", description: "Estimation des provisions techniques avec méthodes chain-ladder et Bornhuetter-Ferguson.", category: "actuariat" },
  { name: "Gestion des risques", description: "Analyses sous Solvabilité II (BSCR, SCR, scénarios de stress).", category: "actuariat" },
  { name: "Statistiques avancées", description: "Maîtrise des GLM, EVT et régressions appliquées aux données d’assurance.", category: "actuariat" },
  { name: "Simulation stochastique", description: "Utilisation de Monte Carlo pour l’évaluation des risques extrêmes.", category: "actuariat" },

   // Data & Programmation
  { name: "Python", description: "Analyse de données, machine learning et automatisation de processus actuariels.", category: "programmation" },
  { name: "R", description: "Modélisation statistique et visualisation des données d’assurance.", category: "programmation" },
  { name: "SQL", description: "Requêtes et gestion de bases de données pour analyses actuarielle et financière.", category: "programmation" },
  { name: "SAS", description: "Analyse statistique et modélisation actuarielle pour l’assurance et la finance.", category: "programmation" },

  // Outils adaptés actuariat / data
  { name: "Power BI", description: "Tableaux de bord interactifs pour le pilotage des résultats techniques.", category: "outils" },
  { name: "Excel / VBA", description: "Automatisation de calculs complexes et création de tableaux décisionnels.", category: "outils" },
  { name: "Pack Office", description: "Maîtrise des outils bureautiques pour produire rapports et analyses.", category: "outils" },
  { name: "Teams", description: "Communication et collaboration efficace avec les équipes et clients.", category: "outils" },

  // Soft skills
  { name: "Communication", description: "Capacité à expliquer des concepts techniques à des non-spécialistes.", category: "soft skills" },
  { name: "Autonomie", description: "Gestion efficace de projets et respect des délais dans un environnement dynamique.", category: "soft skills" },
  { name: "Travail en équipe", description: "Collaboration avec des équipes pluridisciplinaires sur des projets complexes.", category: "soft skills" },
  { name: "Organisation", description: "Priorisation des tâches pour gérer efficacement les charges de travail multiples.", category: "soft skills" },
  { name: "Adaptabilité", description: "Capacité à apprendre rapidement de nouvelles compétences et technologies.", category: "soft skills" },
  { name: "Esprit d'analyse", description: "Compétence à interpréter des données complexes pour en extraire des insights pertinents.", category: "soft skills" },

  // Langues
  { name: "Français", description: "Langue Maternelle", category: "langues" },
  { name: "Anglais", description: "Compétence professionnelle", category: "langues" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("actuariat");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "tous" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["tous", "actuariat", "programmation", "outils", "soft skills", "langues"].map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
