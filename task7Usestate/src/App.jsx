/* eslint-disable no-unused-vars */


import { useState } from 'react'
import './App.css'

function App() {

  const [num, setNum] = useState(0);
  const [x, setX] = useState(true);
  const [y, setY] = useState(false);
  const [page , setPage]=useState(0);
  {
    // if(page==0 && num==0)


  }
  const plus = () => {
    if (num < 10)
      setNum(num + 1);
    else if (num >= 10 && num < 100)
      setNum(num + 10);
    else if (num >= 100 && num < 1000)
      setNum(num + 100)
    else setX(false)
    if (num+1 == 10 || num+10 == 100 || num+100 == 1000)
      setY(true)
    else
    setY(false)
  }
  const minus = () => {
    if (num <= 1000 && num > 100){ 
      setNum(num - 100)
      setPage(page+1)
    }
     
    else if (num <= 100 && num > 10)
      setNum(num - 10)
    else if (num <= 10 && num > 0)
      setNum(num - 1)
    if (num-10 == 10 || num-100 == 100)
      setY(true)
    else
    setY(false)

  }
  return (
    <>
      <div className={y ? "Div1" : "Div"}>
        <h1>Increment And Decrement With UseStste</h1>
        <div>{num}</div>
        <button onClick={plus}>+</button>
        {!x && <button onClick={minus}>-</button>}
        {y && <button className='Yes'>This Number 10 or Double number</button>}
        {  page==0 && num==0 && <div className='New'> Welcome From UseState</div>}
      </div>

    </>
  )
}

export default App
