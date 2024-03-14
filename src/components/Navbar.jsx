import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='container mx-auto flex justify-between items-center py-4'>
          <Link to='/' className='text-white text-2xl font-bold' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3 ml-2' />
          </Link>
          <div className='block lg:hidden'>
            <button className='text-white focus:outline-none' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </button>
          </div>
          <ul className={`lg:flex ${click ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
            <li className='mr-4'>
              <Link to='/' className='text-white hover:border-b-2 hover:border-white' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='mr-4'>
              <Link to='/services' className='text-white hover:border-b-2 hover:border-white' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='mr-4'>
              <Link to='/products' className='text-white hover:border-b-2 hover:border-white' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='text-white hover:border-b-2 hover:border-white' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
