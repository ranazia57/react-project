import React from "react";
import MetaData from '../components/MetaData';
import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-slate-900 to-slate-900 bg-fixed">
      <MetaData title="Home" />
      <div className="absolute inset-0">
        <img
          src="./images/background.png"
          alt="Hero background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-5">
            Elevate Your Luxury scents with Aura by AZ.
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Discover a refined collection of fragrances that transform everyday moments into unforgettable, aromatic experiences.
          </p>
          <Link to="/productpage">
            <button className="inline-flex items-center justify-center p-3 rounded-md bg-slate-300 text-black hover:bg-slate-600 hover:text-white hover:scale-110 focus:outline-none transition-colors shadow-md">
              Start Your Luxury Journey
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
