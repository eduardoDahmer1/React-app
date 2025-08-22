import React from "react";

const features = [
  { title: "Easy Setup", icon: "⚡" },
  { title: "Customizable", icon: "🎨" },
  { title: "SEO Friendly", icon: "🔍" },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-20 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Features
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-900 p-6 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-400">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus lacinia odio vitae vestibulum vestibulum.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
