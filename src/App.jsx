import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DoctorsDashboard from './pages/DoctorsDashboard'
import PatientDashboard from './pages/PatientDashboard'
import EditAppointment from './pages/EditAppointment'
import AppointmentDetail from './pages/AppointmentDetail'
import About from './pages/About'
import Services from './pages/Services'

export default function App() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    const role = localStorage.getItem('user_role')

    if (token && role) {
      setIsAuthenticated(true)
      setUserRole(role)
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    setIsAuthenticated(false)
    setUserRole(null)
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors-dashboard" element={
            isAuthenticated && userRole === 'doctor' ? (
              <DoctorsDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/dashboard/patient" element={
            isAuthenticated && userRole === 'patient' ? (
              <PatientDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/dashboard/appointment/:id" element={<AppointmentDetail />} />
          <Route path="/dashboard/appointment/edit/:id" element={<EditAppointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </div>
  )
}
