import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Button component that renders a button and navigates to the '/cities' route when clicked.
 */
const Button = () => {
  const navigate = useNavigate();

  /**
   * Handles the click event of the button and navigates to the '/cities' route.
   */
  const handleClick = () => {
    navigate('/cities');
  };

  return (
    <div className='flex flex-1 items-center justify-center mt-10'>
      <button
        onClick={handleClick}
        className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 w-full sm:w-auto mt-8 text-base text-center focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800"
      >
        Visit Cities
      </button>
    </div>
  );
};

export default Button;