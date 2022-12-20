
import './App.css';
import Button from './components/Button';
import Logo from './img/counter.png'
import Counter from './components/Counter';
import { useState } from 'react';


function App() {

  const [numClicks , setNumClicks] =  useState(0)

  const handleClick = () => {
    setNumClicks(numClicks + 1)
  }

  const restart = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img 
        className='logo'
        src={Logo} 
        alt='logo'/>
      </div>
      <div className='parent-container'>
        <Counter numClicks={numClicks} />
        <Button 
        text='Click Me'
        isButtonClick={ true }
        handleClick={handleClick} />

        <Button
        text='Restart'
        isButtonClick={ false }
        handleClick={restart} />
      </div>
    </div>
  );
}

export default App;
