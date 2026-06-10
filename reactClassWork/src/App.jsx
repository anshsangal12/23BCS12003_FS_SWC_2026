import { useState } from 'react'


import './App.css'
import MapAndReducerAndFilter from './MapAndReducerAndFilter'

function App() {
  const [count, setCount] = useState(1)
  const[buttonClicks,setButtonClicks] = useState(1)

  const[arr,setArr] = useState([])
  const[arrEle,setArrEle] = useState(arr[arr.length-1])
  const[temp,setTemp] = useState(arr.length-1)
  const handleClickUndo = () => {
    if(temp-1 >= 0){
      let flat=temp-1
      setTemp(flat)
      setArrEle(arr[flat])
    }
  }

  const handleClickRedo = () => {
    if(temp+1 < arr.length){
      let flat=temp+1
      setTemp(flat)
      setArrEle(arr[flat])
    }
  }

  const[input,setInput] = useState("")

  return (

    <>
    <MapAndReducerAndFilter/>
      <h1>{count}</h1>
      
      <button onClick={() => {
        setButtonClicks(buttonClicks + 1)
        if(buttonClicks % 3 === 0){
          setCount(2 * count)
        }
      }}>Increment</button>

      <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={
          ()=>{
            setArr([...arr,input ])
            setArrEle(input)
            setTemp(arr.length-1)
            setInput("")

          }
          
        }>Add Item</button>
        <h1>{arrEle}</h1>
        <h2>{arr}</h2>
        <button onClick={handleClickUndo}>Undo</button>
        <button onClick={handleClickRedo}>Redo</button>

      </div>
    </>
  )
}

export default App

      
