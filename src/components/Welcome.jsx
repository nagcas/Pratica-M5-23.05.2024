import React from 'react';

import '../style/Welcome.css';

import { Alert } from 'react-bootstrap';

function Welcome() {
  return (
    <div className='container text-center container-welcome p-0'>
      <Alert variant={'success'}>
        <h1>Epi Books React</h1>
        <h5>La tua libreria di fiducia</h5>
      </Alert>
    </div>
  );
}

export default Welcome;