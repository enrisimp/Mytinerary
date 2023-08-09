import React from 'react'
import reactLogo from "../../public/react.svg";

export const NavBarCopy = () => {
  return (
    <header className='NavBar'>
      <h1>MYTINERARY</h1>
      <img src={reactLogo} alt="react" />
      <img src="../../public/react.svg" alt="react" />
      <nav className="navbar">
        <Button title='Gmail' to='/gmail' />
        <Button title='Imágenes' to='/img' />
        <ol>
          <li><a href="#"> Link 1 </a> </li>
          <li><a href='#'> Link 2 </a> </li>
          <li><a href="#"> Link 3 </a></li>
          <li><a href="#"> Link 4 </a></li>
        </ol>
      </nav>
    </header>
  );
};
