import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import MyNav from './components/MyNav';
import MyFooter from './components/Myfooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';

function App() {

  const [type, setType] = useState('fantasy');

  return (
    <>
      <MyNav />
      <Welcome />
      <Container>
        <Button variant='success' className='btn btn-success button-type' onClick={() => setType('history')}>History</Button>
        <Button variant='primary' className='btn btn-primary button-type' onClick={() => setType('fantasy')}>Fantasy</Button>
        <Button variant='ternary' className='btn btn-primary button-type' onClick={() => setType('horror')}>Horror</Button>
        <Button variant='warning' className='btn btn-primary button-type' onClick={() => setType('romance')}>Romance</Button>
        <Button variant='dark' className='btn btn-primary button-type' onClick={() => setType('scifi')}>Scifi</Button>
      
        {type === 'fantasy' && <AllTheBooks books={fantasy} />}
        {type === 'history' && <AllTheBooks books={history} />}
        {type === 'horror' && <AllTheBooks books={horror} />}
        {type === 'romance' && <AllTheBooks books={romance} />}
        {type === 'scifi' && <AllTheBooks books={scifi} />}
      </Container>
      <MyFooter />  
    </>
  );
}

export default App;
