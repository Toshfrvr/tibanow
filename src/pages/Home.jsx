import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceShowcase from '../components/ServiceShowcase';
import Footer from '../components/Footer';

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
                    <img src="/src/assets/tibanow logo.png" alt="TibaNow Logo" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
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
                <Link to="/register" className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300 font-medium">
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
                <Link to="/register" className="text-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<main className="relative min-h-screen flex items-center overflow-hidden">
  {/* Advanced Background Elements */}
  <div className="absolute inset-0 z-0">
    {/* Primary Background Image */}
    <div className="w-full h-full bg-[url('/src/assets/female-nurse-doing-consultation-with-patient-taking-notes-digital-tablet-writing-report-waiting-room-medical-assistant-talking-man-consulting-person-with-disease-waiting-area.jpg')] bg-cover bg-center bg-no-repeat"></div>
    
    {/* Advanced Gradient Overlays */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/50 to-purple-900/60"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    
    {/* Animated Background Elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
  </div>

  {/* Content Container */}
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-20">
      
      {/* Left Content - 7 columns */}
      <div className="lg:col-span-7 space-y-8 lg:space-y-10">
        {/* Main Heading */}
        <div className="space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-100 text-sm font-medium">Available 24/7 • Trusted by 50k+ patients</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">Your Health,</span>
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Our Priority
            </span>
            <span className="block text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 font-light">
              Reimagined
            </span>
          </h1>
        </div>

        {/* Enhanced Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
          Experience next-generation healthcare with TibaNow. Connect with specialists instantly, 
          manage appointments seamlessly, and take control of your wellness journey.
        </p>

        {/* Advanced Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 py-8">
          <div className="text-center group cursor-pointer">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">Expert Doctors</div>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              50k+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">Happy Patients</div>
            <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">Satisfaction</div>
            <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            to="/register"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative font-semibold text-lg">Start Your Journey</span>
            <svg className="relative w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <Link
            to="/doctors"
            className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl hover:bg-white/20 border border-white/20 hover:border-white/40 transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="font-semibold text-lg">Find Specialists</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center gap-6 pt-8 opacity-80">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300 text-sm">HIPAA Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300 text-sm">SSL Encrypted</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300 text-sm">24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Right Content - 5 columns */}
      <div className="lg:col-span-5 relative">
        {/* Floating Cards Container */}
        <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
          
          {/* Main Appointment Booking Card - Top Left */}
          <div className="col-span-1 sm:col-span-2 transform hover:scale-105 transition-all duration-500 group">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/20 border border-white/20 h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Quick Booking</h3>
                  <p className="text-gray-500">Book in 3 simple steps</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 cursor-pointer group/step">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover/step:shadow-blue-300 transition-all duration-300">1</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover/step:text-blue-700 transition-colors duration-300">Choose Specialist</h4>
                    <p className="text-sm text-gray-500">Browse expert doctors</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 cursor-pointer group/step">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover/step:shadow-purple-300 transition-all duration-300">2</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover/step:text-purple-700 transition-colors duration-300">Select Time Slot</h4>
                    <p className="text-sm text-gray-500">Pick your schedule</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 cursor-pointer group/step">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover/step:shadow-green-300 transition-all duration-300">3</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover/step:text-green-700 transition-colors duration-300">Get Confirmation</h4>
                    <p className="text-sm text-gray-500">Instant booking details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

           

       

          {/* Notification Card */}
          <div className="absolute top-32 right-4 w-46 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Appointment confirmed</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Today at 3:00 PM with Dr. Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
    <div className="animate-bounce cursor-pointer group">
      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
</main>

      {/* Service Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="w-full max-w-[95%] xl:max-w-[85%] 2xl:max-w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Care
              <span className="relative inline-block mx-2">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Preference</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 transform -skew-x-12"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience healthcare on your terms - whether through our advanced virtual platform or with our dedicated home visit service.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Virtual Consultation Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Consultation</h3>
                <p className="text-gray-600 mb-6">Connect with our qualified doctors from the comfort of your home through our secure video platform.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3 text-gray-600">
                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>24/7 availability</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600">
                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Secure video platform</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600">
                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Digital prescriptions</span>
                  </li>
                </ul>
                <Link to="/book-virtual" className="inline-flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  <span>Book Virtual Consultation</span>
                  <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* House Visit Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">House Visit</h3>
                <p className="text-gray-600 mb-6">Get professional medical care at your doorstep with our experienced doctors visiting your home.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3 text-gray-600">
                    <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Same-day visits available</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600">
                    <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Comprehensive care</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600">
                    <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Medical equipment on-hand</span>
                  </li>
                </ul>
                <Link to="/book-house-visit" className="inline-flex items-center space-x-2 text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                  <span>Schedule House Visit</span>
                  <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

