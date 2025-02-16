import React from 'react';
import { Heart, Target, Coffee } from 'lucide-react';
import MetaData from '../components/MetaData';

const TeamMember = ({ name, role, image }) => (
  <div className="flex flex-col items-center p-6 space-y-4">
    <img
      className="w-32 h-32 rounded-full object-cover"
      src={image}
      alt={name}
    />
    <div className="text-center">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-slate-700 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaData title="About Us" />
      <div className="bg-slate-300 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a passionate team dedicated to creating exceptional experiences and delivering innovative solutions.
          </p>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={Heart}
              title="Passion"
              description="We put our heart into everything we do, ensuring the highest quality in our work."
            />
            <ValueCard
              icon={Target}
              title="Excellence"
              description="We strive for excellence in every project, pushing boundaries and exceeding expectations."
            />
            <ValueCard
              icon={Coffee}
              title="Innovation"
              description="We embrace creativity and innovative thinking to solve complex challenges."
            />
          </div>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Rana Zia Ul Din"
              role="CEO"
              image="./images/zia.png"
            />
            <TeamMember
              name="Abdullah Bashir"
              role="CTO"
              image="./images/abdullah.png"
            />
            <TeamMember
              name="Ahmad Sattar"
              role="Design Director"
              image="./images/ahmad.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
