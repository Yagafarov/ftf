import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => (
  <div className="hero min-h-screen">
    <div className="hero-content text-center flex-col">
      <div className="alert alert-error mb-6 max-w-md mx-auto">
        <span className="text-2xl font-bold">404</span>
        <span>Sahifa topilmadi</span>
      </div>
      <p className="mb-6 text-base-content/70 max-w-md mx-auto">
        Kechirasiz, so‘ralgan sahifa mavjud emas yoki o‘chirilgan.
      </p>
      <Link to="/" className="btn btn-info gap-2">
        <FaHome /> Bosh sahifaga
      </Link>
    </div>
  </div>
);

export default NotFound;
