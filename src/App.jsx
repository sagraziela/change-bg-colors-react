import { useState } from 'react';
import'./App.css';

function App() {
  const [bgColor, setBgColor] = useState('blue-bg');

  return (
    <div className={bgColor}>
        <button onClick={() => setBgColor('blue-bg')}>
          Azul
        </button>

        <button onClick={() => setBgColor('green-bg')}>
          Verde
        </button>

        <button onClick={() => setBgColor('pink-bg')}>
          Rosa
        </button>   
    </div>
  )
}

export default App;
