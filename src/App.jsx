import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{backgroundColor:"Red"}}>Hi</div>
      <div style={{backgroundColor:"Green"}}>Hello</div>
      <div style={{backgroundColor:"Blue"}}>Hey</div>
    </div>
    <div className='flex justify-between'>
      <div className='bg-red-500'>Hi</div>
      <div className='bg-green-500'>Hello</div>
      <div className='bg-blue-500'>Hey</div>
      <div className='bg-blue-500'>Hey</div>
    </div>
    </>
  )
}

export default App
