import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-emerald-400/25 to-teal-500/25 rounded-full blur-lg animate-ping"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                    <img src="/src/assets/tibanow logo.png" alt="TibaNow" className="h-12 w-12 object-contain" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    TibaNow
                  </h2>
                  <p className="text-slate-400 text-sm">Healthcare Reimagined</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              Delivering exceptional healthcare services through innovative virtual consultations, professional home visits, and comprehensive medical care solutions.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </div>
              </a>
              
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </div>
              </a>
              
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/doctors" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                Services
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/virtual-consultation" className="text-slate-400 hover:text-purple-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="mr-2 text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">💻</span>
                    Virtual Consultation
                  </Link>
                </li>
                <li>
                  <Link to="/house-visit" className="text-slate-400 hover:text-purple-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="mr-2 text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">🏠</span>
                    House Visit
                  </Link>
                </li>
                <li>
                  <Link to="/emergency" className="text-slate-400 hover:text-purple-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="mr-2 text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">🚨</span>
                    Emergency Care
                  </Link>
                </li>
                <li>
                  <Link to="/pharmacy" className="text-slate-400 hover:text-purple-400 transition-all duration-300 text-sm flex items-center group">
                    <span className="mr-2 text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">💊</span>
                    Online Pharmacy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                Get in Touch
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Visit Us</p>
                    <p className="text-slate-400 text-sm">Healthcare Ave, Nairobi, KE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Call Us</p>
                    <p className="text-slate-400 text-sm">+(254) 768-999816</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Email Us</p>
                    <p className="text-slate-400 text-sm">contact@tibanow.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-slate-400 text-sm">Get the latest health tips and TibaNow updates delivered to your inbox.</p>
              </div>
              <div className="flex w-full md:w-auto max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-r-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} TibaNow. All rights reserved.
              </p>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-xs font-medium">Service Active</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm hover:underline transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm hover:underline transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 text-sm hover:underline transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
