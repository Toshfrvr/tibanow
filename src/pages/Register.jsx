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
    is_patient: false,
    is_doctor: false, // ✅ FIXED: Initialized to avoid uncontrolled input warning
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
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded mt-10">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Create your TibaNow Account</h2>

          {error && (
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-lg blur"></div>
              <div className="relative bg-red-50 text-red-700 p-4 rounded-lg border border-red-100">{error}</div>
            </div>
          )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={form.first_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={form.password2}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_doctor"
            checked={form.is_doctor}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="is_doctor">Doctor</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_patient"
            checked={form.is_patient}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="is_patient">Patient</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
  ;
}
