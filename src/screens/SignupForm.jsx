import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; 
import MetaData from '../components/MetaData';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup successful", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-300 to-black">
      <MetaData title="Signup" />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 m-14">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create your account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField
              id="firstName"
              name="firstName"
              type="text"
              label="First Name"
              value={formData.firstName}
              error={errors.firstName}
              placeholder="John"
              Icon={User}
              onChange={handleChange}
            />
            <InputField
              id="lastName"
              name="lastName"
              type="text"
              label="Last Name"
              value={formData.lastName}
              error={errors.lastName}
              placeholder="Doe"
              Icon={User}
              onChange={handleChange}
            />
          </div>

          <InputField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            value={formData.email}
            error={errors.email}
            placeholder="you@example.com"
            Icon={Mail}
            onChange={handleChange}
          />

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <PhoneInput
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              defaultCountry="US"
              className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black p-2"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="block w-full mt-1 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
          </div>

          <InputField
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={formData.password}
            error={errors.password}
            placeholder="••••••••"
            Icon={Lock}
            onChange={handleChange}
            rightElement={
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            }
          />

          <InputField
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            label="Confirm Password"
            value={formData.confirmPassword}
            error={errors.confirmPassword}
            placeholder="••••••••"
            Icon={Lock}
            onChange={handleChange}
            rightElement={
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            }
          />

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Create Account
          </button>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-slate-800 hover:text-black">
                Sign in
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({
  id,
  name,
  type,
  label,
  value,
  error,
  placeholder,
  Icon,
  onChange,
  rightElement
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`block w-full pl-10 ${rightElement ? "pr-10" : "pr-3"} py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder={placeholder}
        />
        {rightElement}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
