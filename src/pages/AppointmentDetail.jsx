// src/pages/AppointmentDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AppointmentDetail = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const token = localStorage.getItem('access');
        const response = await axios.get(`http://localhost:8000/api/appointments/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAppointment(response.data);
      } catch (error) {
        console.error('Error fetching appointment:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [id]);

  if (loading) return <div className="p-6">Loading appointment details...</div>;
  if (!appointment) return <div className="p-6 text-red-500">Appointment not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
      <p><strong>Doctor:</strong> {appointment.doctor_detail.user.first_name} {appointment.doctor_detail.user.last_name}</p>
      <p><strong>Patient:</strong> {appointment.patient_detail.user.first_name} {appointment.patient_detail.user.last_name}</p>
      <p><strong>Date:</strong> {appointment.date}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
      <p><strong>Status:</strong> {appointment.status}</p>
      {appointment.notes && <p><strong>Notes:</strong> {appointment.notes}</p>}
    </div>
  );
};

export default AppointmentDetail;
