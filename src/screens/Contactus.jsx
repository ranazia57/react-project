import React from 'react';
import MetaData from '../components/MetaData';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-black via-slate-300 to-black">
      <MetaData title="Contact us" />
      <form action="https://fabform.io/f/xxxxx" method="post">
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="relative group">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover group-hover:brightness-100 brightness-50 transition"
                  />
                  <h1 className="absolute top-10 left-10 text-4xl font-bold text-white">Contact Us</h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white p-6 rounded-lg hover:bg-slate-300">
                      <a href="tel:4706011911" className="flex items-center mb-6 hover:bg-slate-300 hover:text-bold transition p-2">
                        <svg className="w-6 h-6 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
                          <path d="M22.3092 18.3098..." strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ml-5 text-base hover:font-semibold">+92-306-9580053</span>
                        <span className="ml-5 text-base hover:font-semibold">+92-311-6586081</span>
                      </a>
                      <a href="mailto:example@example.com" className="flex items-center mb-6 hover:bg-slate-300 hover:text-bold transition p-2">
                        <svg className="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
                          <path d="M2.81501 8.75L10.1985..." strokeWidth={2} strokeLinecap="round" />
                        </svg>
                        <span className="ml-5 text-base hover:font-semibold">irfanmahi311@gmail.com</span>
                        <span className="ml-5 text-base hover:font-semibold">ziauldinrajpoot@gmail.com</span>
                      </a>
                      <a href="#" className="flex items-center hover:bg-slate-300 hover:text-bold transition p-2">
                        <svg className="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
                          <path d="M25 12.9169C25..." strokeWidth={2} strokeLinecap="round" />
                        </svg>
                        <span className="ml-5 text-base hover:font-semibold">Address: Coming Soon</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 lg:rounded-r-2xl rounded-2xl">
                <h2 className="text-4xl font-semibold text-black mb-8">Send Us A Message</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full h-12 px-4 mb-6 border rounded-full text-gray-700 focus:outline-none focus:border-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full h-12 px-4 mb-6 border rounded-full text-gray-700 focus:outline-none focus:border-black"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full h-12 px-4 mb-6 border rounded-full text-gray-700 focus:outline-none focus:border-black"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 mb-6 border rounded-xl text-gray-700 focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="w-full h-12 bg-black text-white rounded-full hover:text-white transition"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ContactUs;
