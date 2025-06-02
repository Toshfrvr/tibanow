import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">
            {appointment.patient?.user?.first_name} {appointment.patient?.user?.last_name}
          </h3>
          <p className="text-gray-600 text-sm">
            {appointment.date} at {appointment.time}
          </p>
        </div>
        <span 
          className={`px-2 py-1 rounded text-sm ${appointment.status === 'CONFIRMED' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'}`}
        >
          {appointment.status}
        </span>
      </div>
      
      <div className="flex gap-2 mt-4">
        <Link
          to={`/dashboard/appointment/${appointment.id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View Details
        </Link>
        <Link
          to={`/dashboard/appointment/edit/${appointment.id}`}
          className="text-yellow-600 hover:text-yellow-800 text-sm font-medium"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default AppointmentCard;
