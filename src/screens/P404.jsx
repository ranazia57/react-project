import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-slate-800 to-black text-slate-300"
    >
      <h1 className="text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white animate-bounce">
        404
      </h1>
      <p className="text-xl mt-6 text-slate-300 opacity-80">
        It seems you’re lost in the digital abyss. 🌀
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-4 bg-white/10 backdrop-blur-md text-slate-300 border border-slate-300 rounded-lg hover:bg-white hover:text-black hover:shadow-lg transition-all"
      >
        Back to Safety
      </button>
      <div className="mt-12 flex space-x-4">
        <span className="w-16 h-1 bg-slate-300 rounded"></span>
        <span className="w-16 h-1 bg-white rounded"></span>
        <span className="w-16 h-1 bg-slate-300 rounded"></span>
      </div>
    </div>
  );
};

export default NotFoundPage;
