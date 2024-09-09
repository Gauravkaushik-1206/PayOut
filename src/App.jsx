import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* css */}
      {/* <div style={{display:'flex', justifyContent:"space-around"}}>
        <div style={{backgroundColor:"red"}}>hi</div>
        <div style={{backgroundColor:"blue"}}>hi</div>
        <div style={{backgroundColor:"green"}}>hi</div>
      </div> */}

        {/* flex box */}
      {/* <div className='flex justify-center'>
        <div className='bg-red-500'>hi</div>
        <div className='bg-blue-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
      </div> */}

      {/* grid */}
      {/* <div className='grid grid-cols-5'>
        <div className='bg-red-500 col-span-2'>hi</div>
        <div className='bg-blue-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
      </div> */}

      <div className='md:grid grid-cols-3'>
        <div className='bg-red-500 '>hi</div>
        <div className='bg-blue-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
      </div>
    </>
  )
}

export default App
