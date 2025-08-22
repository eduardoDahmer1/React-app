const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 md:px-20 py-4 flex justify-between items-center shadow-md sticky top-0 z-50 navbar-section">
      <h1 className="text-2xl font-bold navbar-title">MyReactApp</h1>
      <ul className="flex space-x-6 text-gray-300 font-medium navbar-links">
        <li><a href="#hero" className="hover:text-white transition nav-link">Home</a></li>
        <li><a href="#services" className="hover:text-white transition nav-link">Services</a></li>
        <li><a href="#features" className="hover:text-white transition nav-link">Features</a></li>
        <li><a href="#contact" className="hover:text-white transition nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
