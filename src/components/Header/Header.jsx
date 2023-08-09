import React, { useState } from 'react'
import Nav from './Nav.jsx'
import Logo from './Logo.jsx'
// import './Header.css'
// Header.css .mi-ul

const links = [
    { value: '/', content: 'Home', id: '1', active: true },
    { value: '/cities', content: 'Cities', id: '2', active: false },
    { value: '/algo', content: 'Link 3', id: '3', active: false },
]

const Header = () => {
	@@ -20,6 +20,7 @@ const Header = () => {
        <header className='flex h-[5vh] items-center px-16 justify-between  w-3/4'>
            <Logo />
            <Nav links={links} />

            {/* <p onClick={() => setShow(!show)}>Show time</p> */}
            {
                // show && <Clock />
            }
            <Clock />
        </header>
    )
}
export default Header