import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos de <span className="text-primary"> Moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionné par l'actuariat et la data science
            </h3>

            <p className="text-muted-foreground">
              Actuellement en Master 2 Actuariat, je me spécialise dans l’analyse 
              des risques et le traitement de données pour proposer des solutions 
              fiables et pertinentes.
            </p>

            <p className="text-muted-foreground">
              Passionné par la modélisation statistique, le machine learning appliqué aux risques 
              et le développement d’outils décisionnels (R, Python, SQL, Power BI),
              je souhaite mettre mes compétences au service d’équipes qui construisent 
              des produits d’assurance rentables et responsables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Me contacter
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Analyse de données</h4>
                  <p className="text-muted-foreground">
                    Création de modèles statistiques et d’outils décisionnels pour l’assurance 
                    et la finance à l’aide de Python, R, SQL et Power BI.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Modélisation des risques</h4>
                  <p className="text-muted-foreground">
                    Développement de modèles actuariels pour évaluer et anticiper 
                    les risques financiers et sanitaires.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Outils décisionnels / Visualisation</h4>
                  <p className="text-muted-foreground">
                    Maîtrise de Power BI, Excel/VBA et autres outils pour automatiser 
                    l’analyse et produire des rapports exploitables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
