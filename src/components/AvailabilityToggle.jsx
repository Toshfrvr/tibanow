import React from 'react';

const AvailabilityToggle = ({ doctor, setDoctor }) => {
  const toggleAvailability = () => {
    // Update local state only for development
    setDoctor(prev => ({
      ...prev,
      is_available: !prev.is_available
    }));
  };

  return (
    <button
      onClick={toggleAvailability}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${doctor.is_available ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white`}
    >
      {doctor.is_available ? 'Available' : 'Not Available'}
    </button>
  );
};

export default AvailabilityToggle;
