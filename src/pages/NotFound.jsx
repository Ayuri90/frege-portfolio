import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl md:text-9xl font-bold text-gradient">404</h1>
      <p className="mt-4 text-xl md:text-2xl font-semibold">Page introuvable</p>
      <p className="mt-2 text-muted-foreground max-w-md">
        Désolé, la page que vous recherchez n’existe pas ou a été déplacée.
      </p>
      <Link to="/" className="cosmic-button mt-8 inline-flex items-center gap-2">
        <Home size={16} />
        Retour à l’accueil
      </Link>
    </div>
  );
};
