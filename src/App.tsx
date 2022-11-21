import { useState } from 'react'
import './App.css'
import ImageCropper from './components/ImageCropper'
function App() {
  return (
    <div className="App">
      {/* <svg width={200} height={200} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ border: "2px solid red" }}>
        <path
          fill='none'
          stroke="black"
          strokeWidth={5}
          d="M0,0 C10,50 50,90 100,50 S150,100 200,150"

        />
      </svg> */}
      <ImageCropper />
    </div>
  )
}

export default App
