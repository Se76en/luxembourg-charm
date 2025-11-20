const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-6">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">
            Le Luxembourg
          </h3>
          <p className="font-inter text-background/80">
            Un petit pays avec un grand charme francophone
          </p>
        </div>
        
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        
        <p className="font-inter text-sm text-background/60 flex items-center justify-center gap-2">
          Fabriqué avec 
          <span className="text-red-500 animate-heartbeat inline-block">❤️</span>
          par Iurascu Iulian
        </p>
      </div>
    </footer>
  );
};

export default Footer;
