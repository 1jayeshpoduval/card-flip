import { useState } from 'react';
import './App.css';
import Card from './Card.jsx';

function App() {

  const [flipState, setFlipState] = useState(false)
  const cardFlip = () => {
    setFlipState(!flipState)
    }
  

  return (
    <section className='section'>
      <div className='container u-d-flex u-align-center'>
        <Card flipped = {flipState} />
        <div className='btn' onClick={cardFlip} >FLIP</div>
      </div>
    </section>
  );
}

export default App;
