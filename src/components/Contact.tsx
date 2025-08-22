import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada: " + message);
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-900 text-white contact-section">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center contact-title">
          Fale Conosco
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-gray-800 p-8 rounded-xl shadow-lg contact-form"
        >
          <input
            type="text"
            placeholder="Seu Nome"
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Seu Email"
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Sua Mensagem"
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="self-start mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition font-medium contact-btn"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
