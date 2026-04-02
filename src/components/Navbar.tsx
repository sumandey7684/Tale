const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/90 py-3 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-tale-dark text-white p-1.5 rounded-lg" aria-hidden="true" />
            <span className="text-xl font-serif font-medium text-tale-dark tracking-tight">
              Tale
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Methodology", "Library", "Articles", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-tale-dark transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-tale-dark transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-tale-dark/60 hover:text-tale-dark transition-colors px-4 py-2">
            Log in
          </button>
          <button className="flex items-center gap-2 rounded-full bg-tale-dark px-6 py-3 text-sm font-bold text-white shadow-[0_15px_30px_-5px_rgba(30,47,35,0.2)] transition-shadow hover:shadow-[0_20px_40px_-5px_rgba(30,47,35,0.3)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
