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
    <div className='App'>
      <div className='Card'>
        <div className='Advice'>
          <h3 id="giftAdvice">👧Haloo👦</h3>
          <h5>Please read this advice, for you🙏</h5>
          <p>{ advice }</p>
          <button onClick={fetchAdvice}>Get Another Advice</button>
        </div>
      </div>
    </div>
  );
}

export default App;
