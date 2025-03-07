import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';

  const validate = (value) => {
    if (value.length < 6) return false;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(email) || !validate(password)) return;
    history.push('auth/login', { email, password });
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeOut' }}
      className="flex flex-col items-center"
    >
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          aria-label="Login"
        >
          Login
        </button>
      </form>
    </motion.div>
  );
};

export default Login;
