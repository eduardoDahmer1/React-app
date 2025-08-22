import { FaRocket, FaPalette, FaMobileAlt } from "react-icons/fa";


const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight corzinha">
            Welcome to My React App
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-gray-300">
            Build amazing web apps with React and TailwindCSS, fully responsive and modern.
          </p>

          {/* Botão principal */}
          <a
            href="#services"
            className="inline-block bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition mb-6"
          >
            Explore Services
          </a>

          {/* Destaques com ícones */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-300">
            <div className="flex items-center gap-2 hover:text-yellow-300 transition">
              <FaRocket className="text-yellow-300 text-xl" />
              <span>Fast & Optimized</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-300 transition">
              <FaPalette className="text-yellow-300 text-xl" />
              <span>Customizable UI</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-300 transition">
              <FaMobileAlt className="text-yellow-300 text-xl" />
              <span>Responsive Design</span>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2">
          <img
            src="/assets/hero-image.png"
            alt="Hero Illustration"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;