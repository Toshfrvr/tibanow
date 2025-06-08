import React from 'react';

export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">About TibaNow</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>TibaNow</strong> is a smart and accessible healthcare platform designed to connect patients with the right specialists, book appointments online, and make secure payments—all in one place.
      </p>

      <div className="mt-8 text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Symptom-based specialist matching</li>
          <li>Doctor and patient dashboards</li>
          <li>Appointment booking and history</li>
          <li>Real-time availability & secure payments (Stripe & M-Pesa)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-6">Our Mission</h2>
        <p>
          To make healthcare more accessible, smarter, and faster for everyone—especially in underserved regions.
        </p>
      </div>
    </div>
  );
}
