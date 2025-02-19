import { useState } from 'react'
import Modify from './Components/Modify/Modify.jsx'
import Sample from './Components/Sample/Sample.jsx'

import './App.css'
import './resetStyle.css'

function App() {
  const [color, setColor] = useState(localStorage.getItem('color') || '#000');
      const [solidColor, setSolidColor] = useState(localStorage.getItem('solidColor') || '#000');

  return (
    <div className='App'>
      <Modify color={color} setColor={setColor} solidColor={solidColor} setSolidColor={setSolidColor}/>
      <Sample color={color} solidColor={solidColor}/>
    </div>
  )
}

export default App
