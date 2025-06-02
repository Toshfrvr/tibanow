import { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  // Mock data for development
  const mockAppointments = [
    {
      id: 1,
      date: new Date().toISOString().slice(0, 10),
      time: '09:00',
      doctor_detail: {
        user: {
          first_name: 'John',
          last_name: 'Doe'
        },
        specialization: 'General Medicine'
      },
      status: 'CONFIRMED'
    },
    {
      id: 2,
      date: new Date(Date.now() + 172800000).toISOString().slice(0, 10), // 2 days later
      time: '15:30',
      doctor_detail: {
        user: {
          first_name: 'Jane',
          last_name: 'Smith'
        },
        specialization: 'Pediatrics'
      },
      status: 'PENDING'
    }
  ];

  const [appointments, setAppointments] = useState(mockAppointments);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <div className="text-center p-6">Loading your appointments...</div>;
  if (error) return <div className="text-center p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Appointments</h2>
        <Link 
          to="/dashboard/appointment/create" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book New Appointment
        </Link>
      </div>

      {appointments.length === 0 ? (
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-600">You have no appointments yet.</p>
          <Link to="/dashboard/appointment/create" className="text-blue-500 hover:underline">
            Book your first appointment
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appointments.map((appt) => (
            <div key={appt.id} className="border rounded-xl p-4 shadow bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold">
                Dr. {appt.doctor_detail.user.first_name} {appt.doctor_detail.user.last_name}
              </h3>
              <p className="text-gray-600"><strong>Specialization:</strong> {appt.doctor_detail.specialization}</p>
              <p className="text-gray-600"><strong>Date:</strong> {appt.date}</p>
              <p className="text-gray-600"><strong>Time:</strong> {appt.time}</p>
              <p className="text-gray-600">
                <strong>Status:</strong> 
                <span className={`ml-2 px-2 py-1 rounded ${appt.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {appt.status}
                </span>
              </p>
              <div className="flex space-x-2 mt-4">
                <Link
                  to={`/dashboard/appointment/edit/${appt.id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Reschedule
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
