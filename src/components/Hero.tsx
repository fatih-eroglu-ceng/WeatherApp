import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full py-10 text-center text-white"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero.jpg')` }}
    >
      <h1 className="text-4xl font-bold">Weather App</h1>
      <p className="text-lg mt-2 font-semibold">For Eskişehir</p>
    </div>
  );
};

export default Hero;
