import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '', role: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
const handleSubmit = (e) => {
  e.preventDefault();
  // Accept any username and password — just mock login success
  if (username && password) {
    setIsLoggedIn(true);
    setError(null);
  } else {
    setError('Please enter both username and password.');
  }
};

  const handleAdminLogin = () => {
    if (form.username === 'admin' && form.password === '123') {
      // Role-based redirect simulation
      if (form.role === 'doctor') {
        navigate('/doctors-dashboard')
      } else if (form.role === 'patient') {
        navigate('/dashboard/patient')
      } else {
        setError('Role not recognized for admin login.')
      }
    } else {
      setError('Invalid username or password for demo login.')
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#E1F5FE] via-white to-[#F3E5F5] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://img.freepik.com/free-photo/happy-black-male-doctor-pointing-empty-space-presenting-product_1262-12349.jpg?t=st=1749311091~exp=1749314691~hmac=077b444b397db6e69a8f76e1a91a6cf7f76d6a27d80ad645568310adff2edbe7&w=1380"
          alt="Doctor Presenting"
          className="absolute top-0 right-0 w-full h-full object-cover opacity-30 transform rotate-6 scale-110"
        />
        <div className="absolute -bottom-48 -left-48 w-196 h-196 bg-gradient-to-br from-[#0288D1]/30 to-[#9C27B0]/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-48 -right-48 w-126 h-126 bg-gradient-to-br from-[#03A9F4]/30 to-[#03A9F4]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        <div className="w-full max-w-md space-y-8 relative">
          <div className="relative group cursor-pointer mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#03A9F4] to-[#03A9F4] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/80 backdrop-blur-xl ring-1 ring-gray-200/50 rounded-lg p-8">
              <div className="flex justify-center">
                <img src="/src/assets/tibanow logo.png" alt="TibaNow Logo" className="h-16 w-16 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight bg-gradient-to-r from-[#03A9F4] to-[#03A9F4] bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-[#03A9F4] hover:text-[#0288D1] transition-colors duration-300">
                  Sign up now
                </Link>
              </p>
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
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03A9F4]/30 to-[#9C27B0]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#03A9F4] focus:outline-none focus:ring-[#03A9F4] sm:text-sm bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="sr-only">Role</label>
                <div className="relative group">
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 bg-white/50 backdrop-blur-sm focus:z-10 focus:border-[#03A9F4] focus:outline-none focus:ring-[#03A9F4] sm:text-sm transition-all duration-300 focus:bg-white"
                    required
                  >
                    <option value="">Select role</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9C27B0]/30 to-[#E91E63]/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="relative block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#9C27B0] focus:outline-none focus:ring-[#9C27B0] sm:text-sm bg-white/50 backdrop-blur-sm transition-all duration-300 focus:bg-white"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#03A9F4] focus:ring-[#03A9F4] transition duration-300"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-[#03A9F4] hover:text-[#0288D1] transition-colors duration-300">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg border border-transparent py-3 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#03A9F4] focus:ring-offset-2 bg-gradient-to-r from-[#03A9F4] to-[#9C27B0] hover:from-[#0288D1] hover:to-[#7B1FA2] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-white/70 group-hover:text-white/90 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}