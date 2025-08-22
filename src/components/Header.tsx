const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50 header-section">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-4 header-container">
        <h1 className="text-3xl md:text-4xl font-extrabold header-title">Meu App</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-gray-300 font-medium header-nav">
            <li><a href="#hero" className="hover:text-white transition nav-link">Home</a></li>
            <li><a href="#services" className="hover:text-white transition nav-link">Serviços</a></li>
            <li><a href="#contact" className="hover:text-white transition nav-link">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
