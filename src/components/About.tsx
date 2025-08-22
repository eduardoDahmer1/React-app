import React from "react";

const About = () => {
  return (
<section id="about" className="py-20 px-6 md:px-20 bg-gray-800 text-gray-300">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
    <img
      src="/fotos/lucasFoto.jpg"
      alt="Lucas Maronez"
      className="rounded-lg shadow-lg w-full md:w-1/2"
    />
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
        Quem é Lucas Maronez?
      </h2>
      <p className="mb-4 text-gray-300">
        Sócio-fundador da Maronez Advogados, especialista em isenção de Imposto
        de Renda para aposentados, pensionistas e militares. Atua com ética e
        atendimento humanizado.
      </p>
      <a
        href="https://wa.me/554599822480?text=Quero falar com o Lucas"
        className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded transition"
      >
        FALAR COM UM ESPECIALISTA
      </a>
    </div>
  </div>
</section>

  );
};

export default About;
