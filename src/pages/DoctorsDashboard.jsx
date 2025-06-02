import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentCard from '../components/AppointmentCard';
import AvailabilityToggle from '../components/AvailabilityToggle';

function DoctorsDashboard() {
  // Mock data for development
  const mockDoctor = {
    user: {
      first_name: 'John',
      last_name: 'Doe'
    },
    specialization: 'General Medicine',
    is_available: true
  };

  const mockAppointments = [
    {
      id: 1,
      date: new Date().toISOString().slice(0, 10),
      time: '10:00',
      patient: {
        user: {
          first_name: 'Alice',
          last_name: 'Smith'
        }
      },
      status: 'CONFIRMED'
    },
    {
      id: 2,
      date: new Date(Date.now() + 86400000).toISOString().slice(0, 10), // tomorrow
      time: '14:30',
      patient: {
        user: {
          first_name: 'Bob',
          last_name: 'Johnson'
        }
      },
      status: 'PENDING'
    }
  ];

  const [doctor, setDoctor] = useState(mockDoctor);
  const [appointments, setAppointments] = useState(mockAppointments);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  if (loading) return <div className="text-center p-6">Loading Doctor Dashboard...</div>;
  if (error) return <div className="text-center p-6 text-red-600">{error}</div>;
  if (!doctor) return <div className="text-center p-6">No doctor profile found.</div>;

  const today = new Date().toISOString().slice(0, 10);
  const todaysAppointments = appointments.filter(app => app.date === today);
  const upcomingAppointments = appointments.filter(app => app.date > today);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, Dr. {doctor?.user?.first_name}</h1>
        <AvailabilityToggle doctor={doctor} setDoctor={setDoctor} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Today's Appointments ({todaysAppointments.length})</h2>
          <div className="space-y-4">
            {todaysAppointments.length === 0 ? (
              <p className="text-gray-500">No appointments scheduled for today.</p>
            ) : (
              todaysAppointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            )}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments ({upcomingAppointments.length})</h2>
          <div className="space-y-4">
            {upcomingAppointments.length === 0 ? (
              <p className="text-gray-500">No upcoming appointments scheduled.</p>
            ) : (
              upcomingAppointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DoctorsDashboard;
