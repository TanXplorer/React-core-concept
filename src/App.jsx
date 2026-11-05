import { useState } from 'react'
import Counter from '../state'
import Users from './user'
import './App.css'

import Batsman from './batsman'
function App() {
  
  function handleClick(){

    alert('i am clicked')
  }

return(
<>

<h3>Vite + React</h3>

<Users></Users>

<Batsman></Batsman>
<Counter></Counter>



{/* <button >Click me</button> */}

</>


)

}

export default App
