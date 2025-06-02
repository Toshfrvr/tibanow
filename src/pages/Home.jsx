import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/*  Navbar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute  opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  <div className="relative bg-white rounded-full p-1 transform group-hover:scale-110 transition-transform duration-300">
                    <img src="/src/assets/tibanow logo.png" alt="TibaNow Logo" className="h-10 w-10 object-contain" />
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">About</Link>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Services</Link>
                <Link to="/doctors" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Doctors</Link>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Contact</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/login" className="px-6 py-2 rounded-xl text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 font-medium">
                  Login
                </Link>
                <Link to="/register" className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300 font-medium">
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute left-0 block w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                  <span className={`absolute left-0 block w-full h-0.5 bg-gray-600 top-2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute left-0 block w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300">About</Link>
              <Link to="/services" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300">Services</Link>
              <Link to="/doctors" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300">Doctors</Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300">Contact</Link>
              <div className="grid grid-cols-2 gap-4 px-4 pt-4 border-t border-gray-100">
                <Link to="/login" className="text-center px-4 py-2 rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all duration-300">
                  Login
                </Link>
                <Link to="/register" className="text-center px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('/src/assets/female-nurse-doing-consultation-with-patient-taking-notes-digital-tablet-writing-report-waiting-room-medical-assistant-talking-man-consulting-person-with-disease-waiting-area.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/50 to-purple-900/40"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                Healthcare
                <br />
                <span className="text-blue-400">Reimagined</span> for You
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Experience the future of healthcare with TibaNow. Book appointments, consult with specialists, and manage your health journey - all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/doctors"
                  className="px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-200 border border-white/20"
                >
                  Find Doctors
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-200">Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50k+</div>
                  <div className="text-gray-200">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">98%</div>
                  <div className="text-gray-200">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl transform rotate-6 blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 pb-6 border-b border-gray-100">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quick Appointment</h3>
                      <p className="text-gray-600">Book in 3 easy steps</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors duration-300 cursor-pointer group/step">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg group-hover/step:shadow-blue-200 transition-all duration-300">1</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 group-hover/step:text-blue-600 transition-colors duration-300">Choose your specialist</h4>
                        <p className="text-sm text-gray-500">Browse through our expert doctors</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-50/50 transition-colors duration-300 cursor-pointer group/step">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg group-hover/step:shadow-purple-200 transition-all duration-300">2</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 group-hover/step:text-purple-600 transition-colors duration-300">Select appointment time</h4>
                        <p className="text-sm text-gray-500">Choose your preferred schedule</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-pink-50/50 transition-colors duration-300 cursor-pointer group/step">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg group-hover/step:shadow-pink-200 transition-all duration-300">3</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 group-hover/step:text-pink-600 transition-colors duration-300">Get instant confirmation</h4>
                        <p className="text-sm text-gray-500">Receive immediate booking details</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-center">
                    <div className="animate-bounce text-gray-400 flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors duration-300">
                      <span className="text-sm font-medium">Scroll to learn more</span>
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© {new Date().getFullYear()} TibaNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
