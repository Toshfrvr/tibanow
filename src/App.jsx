import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DoctorsDashboard from './pages/DoctorsDashboard'
import PatientDashboard from './pages/PatientDashboard'
import EditAppointment from './pages/EditAppointment'
import AppointmentDetail from './pages/AppointmentDetail'

export default function App() {
  // For development, set these to true and 'doctor' or 'patient'
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [userRole, setUserRole] = useState('doctor')

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserRole(null)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors-dashboard" element={<DoctorsDashboard />} />
          <Route path="/dashboard/patient" element={<PatientDashboard />} />
          <Route path="/dashboard/appointment/:id" element={<AppointmentDetail />} />
          <Route path="/dashboard/appointment/edit/:id" element={<EditAppointment />} />
        </Routes>
      </main>
    </div>
  )
}
