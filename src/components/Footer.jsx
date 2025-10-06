import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Gauche : Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Frege Meli - Portfolio.
        </p>

        {/* Centre : Icônes réseaux sociaux */}
        <div className="flex space-x-6 justify-center">
          <a
            href="mailto:frege.meli@gmail.com"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform hover:scale-110"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/frege-meli-kouyem-b81805210"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform hover:scale-110"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/Ayuri90"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform hover:scale-110"
          >
            <Github size={22} />
          </a>
        </div>

        {/* Droite : Bouton remonter */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform hover:scale-110"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
