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
    <br></br>
    <br></br>
    <br></br>

    {/* GRID */}
    <div className='grid grid-cols-12 gap-4'>
      <div className='bg-red-500 col-span-5'>Hi</div>
      <div className='bg-green-500 col-span-5'>Hello</div>
      <div className='bg-blue-500 col-span-2'>Hey</div>
    </div>
     <br></br>
     <br></br>
    <br></br>
    <br></br>

     <div className='grid grid-cols-1 md:grid-cols-3 '>
     <div className='bg-red-500'>Hi</div>
      <div className='bg-green-500'>Hello</div>
      <div className='bg-blue-500'>Hey</div>
     </div>
    </>
  )
}

export default App
