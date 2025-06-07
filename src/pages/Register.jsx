import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password2: '',
    is_doctor: false,
    is_patient: false,
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.password2) {
      setError("Passwords don't match!");
      return;
    }

    if (!form.is_doctor && !form.is_patient) {
      setError('Please select a role: Doctor or Patient.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful ✅');
        navigate('/login');
      } else {
        setError(data.detail || 'Registration failed. Try different credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#E1F5FE] via-white to-[#F3E5F5] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://img.freepik.com/free-photo/happy-black-male-doctor-pointing-empty-space-presenting-product_1262-12349.jpg?t=st=1749311091~exp=1749314691~hmac=077b444b397db6e69a8f76e1a91a6cf7f76d6a27d80ad645568310adff2edbe7&w=1380"
          alt="Doctor Presenting"
          className="absolute top-0 right-0 w-full h-full object-cover opacity-30 transform rotate-6 scale-110"
        />
        <div className="absolute -bottom-48 -left-48 w-196 h-196 bg-gradient-to-br from-[#03A9F4]/30 to-[#9C27B0]/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-48 -right-48 w-196 h-196 bg-gradient-to-br from-[#9C27B0]/30 to-[#E91E63]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Side - Registration Form */}
        <div className="w-full max-w-md space-y-8 relative">
          <div className="relative group cursor-pointer mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#03A9F4] to-[#03A9F4] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/80 backdrop-blur-xl ring-1 ring-gray-200/50 rounded-lg p-8">
              <div className="flex justify-center">
                <img src="/src/assets/tibanow logo.png" alt="TibaNow Logo" className="h-16 w-16 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight bg-gradient-to-r from-[#03A9F4] to-[#03A9F4] bg-clip-text text-transparent">
                Join TibaNow Today
              </h2>
            </div>
          </div>

          {error && (
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-lg blur"></div>
              <div className="relative bg-red-50 text-red-700 p-4 rounded-lg border border-red-100">{error}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03A9F4]/30 to-[#9C27B0]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={form.first_name}
                    onChange={handleChange}
                    className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#03A9F4] focus:outline-none focus:ring-[#03A9F4] sm:text-sm bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
                    required
                  />
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03A9F4]/30 to-[#9C27B0]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={form.last_name}
                    onChange={handleChange}
                    className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#03A9F4] focus:outline-none focus:ring-[#03A9F4] sm:text-sm bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
                    required
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03A9F4]/30 to-[#9C27B0]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#03A9F4] focus:outline-none focus:ring-[#03A9F4] sm:text-sm bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03A9F4]/30 to-[#9C27B0]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#03A9F4] focus:outline-none focus:ring-[#03A9F4] sm:text-sm bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9C27B0]/30 to-[#E91E63]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#9C27B0] focus:outline-none focus:ring-[#9C27B0] sm:text-sm bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9C27B0]/30 to-[#E91E63]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  value={form.password2}
                  onChange={handleChange}
                  className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#9C27B0] focus:outline-none focus:ring-[#9C27B0] sm:text-sm bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
                  required
                />
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-lg p-4 space-y-3">
                <p className="text-sm font-medium text-gray-700 mb-2">I am registering as a:</p>
                <div className="flex items-center space-x-4">
                  <label className="relative group flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="is_doctor"
                      checked={form.is_doctor}
                      onChange={handleChange}
                      className="h-5 w-5 rounded border-gray-300 text-[#03A9F4] focus:ring-[#03A9F4] transition duration-300"
                    />
                    <span className="ml-2 text-sm text-gray-700 group-hover:text-[#03A9F4] transition-colors duration-300">Doctor</span>
                  </label>
                  <label className="relative group flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="is_patient"
                      checked={form.is_patient}
                      onChange={handleChange}
                      className="h-5 w-5 rounded border-gray-300 text-[#03A9F4] focus:ring-[#03A9F4] transition duration-300"
                    />
                    <span className="ml-2 text-sm text-gray-700 group-hover:text-[#03A9F4] transition-colors duration-300">Patient</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg border border-transparent py-3 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#03A9F4] focus:ring-offset-2 bg-gradient-to-r from-[#03A9F4] to-[#9C27B0] hover:from-[#0288D1] hover:to-[#7B1FA2] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-white/70 group-hover:text-white/90 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Create Account
            </button>
          </form>
        </div>

        {/* Right Side - Features */}
        <div className="hidden lg:block w-full max-w-md">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#03A9F4] to-[#9C27B0] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/80 backdrop-blur-xl ring-1 ring-gray-200/50 rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#03A9F4] to-[#9C27B0] bg-clip-text text-transparent">
                Why Choose TibaNow?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#03A9F4] to-[#9C27B0] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Appointments</h4>
                    <p className="text-sm text-gray-600">Book and manage your medical appointments with just a few clicks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#03A9F4] to-[#9C27B0] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Platform</h4>
                    <p className="text-sm text-gray-600">Your medical information is protected with state-of-the-art security.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#03A9F4] to-[#9C27B0] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Access</h4>
                    <p className="text-sm text-gray-600">Get immediate access to your medical history and upcoming appointments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  ;
}
