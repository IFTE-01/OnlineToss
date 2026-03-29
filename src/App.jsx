import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg' 
import './App.css'
import a from './photo/i1.png'
import b from './photo/i2.png'
import c from './photo/i3.png'
import d from './photo/i4.png'
import e from './photo/i5.png'
import g from './photo/i7.png'

function App() {
    const [coin,setCoin] = useState(a)
    const [mota,setMota] = useState(150)
    const [r,setter]=useState(-1)
    const [answer,setAnswer]=useState("____")

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const t = 50;

    async function result() {
      await sleep(t);
      setMota(150)
      setCoin(b); 
      await sleep(t);
      setMota(100)
      setCoin(c); 
      await sleep(t);
      setMota(50)
      setCoin(d);
      await sleep(t);
      setMota(100)
      setCoin(e);
      await sleep(t);
      setMota(150)
      setCoin(g);
      await sleep(t);
      await sleep(t);
      setMota(150)
      setCoin(a);  
      await sleep(t);
      setMota(150)
      setCoin(b); 
      await sleep(t);
      setMota(100)
      setCoin(c); 
      await sleep(t);
      setMota(50)
      setCoin(d);
      await sleep(t);
      setMota(100)
      setCoin(e);
      await sleep(t);
      setMota(150)
      setCoin(g);
      await sleep(t);
      await sleep(t);
      setMota(150)
      setCoin(a); 
      await sleep(t);
      setMota(150)
      setCoin(b); 
      await sleep(t);
      setMota(100)
      setCoin(c); 
      await sleep(t);
      setMota(50)
      setCoin(d);
      await sleep(t);
      setMota(100)
      setCoin(e);
      await sleep(t);
      setMota(150)
      setCoin(g);
      await sleep(t);
      await sleep(t);
      setMota(150)
      setCoin(a); 
      await sleep(t);
      setMota(150)
      setCoin(b); 
      await sleep(t);
      setMota(100)
      setCoin(c); 
      await sleep(t);
      setMota(50)
      setCoin(d);
      await sleep(t);
      setMota(100)
      setCoin(e);
      await sleep(t);
      setMota(150)
      setCoin(g);
      await sleep(t);
      await sleep(t);
      setMota(150)
      setCoin(a); 

      let x = Math.floor(Math.random() * 2);  
      if (x === 0) setAnswer("Tail");
      else setAnswer("Head");
    }

    return (
      <>
       <div className='text-center pt-3  '>
        <p className='text-5xl bg-yellow-500 text-gray-50 py-3 px-6 flex justify-center text-center inline-block rounded-md' ><b>Online Toss</b></p>
        <div className='flex justify-center p-10'>
          <img 
            src={coin} 
            style={{ width: mota, height: 150 }} 
          />
        </div>
        <p className='border shadow-0 flex justify-center mx-auto mb-4 text-4xl rounded-md' style={{width: 100}}><b>{answer}</b></p>
        <button 
          onClick={()=>result()}
          className="
            px-6 py-2 rounded-xl bg-yellow-200 text-black font-semibold
            transition-all duration-200
            hover:bg-yellow-300 active:bg-yellow-500 hover:scale-110 text-3xl
          "
        >
          Flip the coin
        </button>
       </div>
      </>
    )
}

export default App