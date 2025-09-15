import { useState } from 'react'

import './App.css'
import PaystackPayment from './components/PaystackPayment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaystackPayment/>
    </>
  )
}

export default App;
