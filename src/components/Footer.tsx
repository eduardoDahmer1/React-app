const Footer = () => {
  return (
    <footer className="footer py-8 px-6 md:px-20 bg-gray-900 text-gray-400 text-center">
      <p className="mb-2">&copy; {new Date().getFullYear()} MyReactApp. Todos os direitos reservados.</p>
      <div className="space-x-2">
        <a href="#" className="text-blue-400 hover:text-blue-500 transition">
          Facebook
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-500 transition">
          Twitter
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-500 transition">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
