import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice()
  }, [])
  
  const fetchAdvice = () => {
    return(
      axios.get('https://api.adviceslip.com/advice')
          .then((response) => {
            const advice = response.data.slip
            setAdvice(advice.advice)
            console.log("button clicked")
            // document.getElementById("giftAdvice").innerHTML += advice;
          })
          .catch((error) => {
            console.log(error)
            console.log("button cannot clicked")
          })      

    )
  }

  return (
    <div className='app'>
      <div className='card'>
        <div className='advice'>
          <p id="giftAdvice">👧Haloo👦</p>
          <p>Please read this advice, for you🙏</p>
          <h2 className='heading'>{ advice }</h2>
          <button onClick={fetchAdvice} className='button'>
            <span>Get Another Advice</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
