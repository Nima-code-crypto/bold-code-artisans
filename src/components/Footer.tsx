const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-sm">
          <span className="gradient-text">Nimab</span>{" "}
          <span className="text-foreground">Development</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Nimab Development. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
