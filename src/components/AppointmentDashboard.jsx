import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AppointmentDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllAppointments = async () => {
      try {
        const token = localStorage.getItem('access');
        const response = await axios.get('http://localhost:8000/api/appointments/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllAppointments();
  }, []);

  if (loading) return <div className="text-center p-6">Loading all appointments...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appointments.map((appt) => (
            <div key={appt.id} className="border rounded-xl p-4 shadow bg-white">
              <h3 className="text-lg font-semibold">
                Doctor: {appt.doctor_detail?.user?.first_name} {appt.doctor_detail?.user?.last_name}
              </h3>
              <p><strong>Patient:</strong> {appt.patient_detail?.user?.first_name} {appt.patient_detail?.user?.last_name}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <p><strong>Status:</strong> {appt.status}</p>
              <div className="flex space-x-2 mt-4">
                <Link
                  to={`/dashboard/appointment/edit/${appt.id}`}
                  className="bg-yellow-400 text-white px-3 py-1 rounded"
                >
                  Edit
                </Link>
                <Link
                  to={`/dashboard/appointment/${appt.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentDashboard;
