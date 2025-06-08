// src/pages/Services.jsx
import React from 'react';
import ServiceShowcase from '../components/ServiceShowcase';

export default function Services() {
  return (
    <main className="bg-white">
      {/* Optional: Add a hero section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-100 to-purple-100">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From virtual consultations to home visits, we bring healthcare closer to you—wherever you are, however you prefer.
        </p>
      </section>

      {/* Service Cards */}
      <ServiceShowcase />

      {/* Optional: Add testimonials, call-to-action, or FAQs here later */}
    </main>
  );
}
