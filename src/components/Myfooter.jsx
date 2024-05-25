import React from 'react';

function MyFooter() {
  return (
    <div className='container-fluid shadow mt-4'>
      <footer className='py-3'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-body-secondary'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-body-secondary'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-body-secondary'>
              Browse
            </a>
          </li>
        </ul>
        <p className='text-center text-body-secondary'>© 2024 Epi Books</p>
      </footer>
    </div>
  );
}

export default MyFooter;