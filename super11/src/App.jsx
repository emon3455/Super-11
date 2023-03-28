import { useState } from 'react'

import './App.css'
import Banner from './Banner/Banner'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     <Header></Header>

     <Banner></Banner>

    </div>
  )
}

export default App
