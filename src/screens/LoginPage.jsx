import React, { useState } from "react";
import MetaData from '../components/MetaData';
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false); // State to handle checkbox background
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log("Login successful");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-300 to-black flex items-center justify-center p-4">
      <MetaData title="Login" />
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="p-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
              <p className="text-gray-600">Sign in to continue your journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-200" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 px-12 py-3 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors duration-200" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 px-12 py-3 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label htmlFor="remember-me" className="flex items-center space-x-2 cursor-pointer">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className={`rounded border-gray-300 focus:ring-black ${
                      isChecked ? "bg-black text-white" : "bg-white"
                    }`}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-slate-800 hover:text-black transition-colors duration-200">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin mx-auto" size={24} />
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Log in</span>
                    <ArrowRight size={20} />
                  </div>
                )}
              </button>
            </form>

            <p className="text-center mt-8 text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-slate-800 hover:text-black font-semibold transition-colors duration-200"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
