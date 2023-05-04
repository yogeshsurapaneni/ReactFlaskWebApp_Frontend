import React, { useState, useEffect } from 'react'

function App() {
  
  const [data, setData] = useState([]) 

  useEffect(() => {
      fetch("/host").then(
        res => res.json()
      ).then(
        data => {
            setData(data)
        }
      )
  }, [])

  return (
    <div className="App">
          <h1 style={{fontWeight: 'bold', color: 'red' }}> hostname: </h1> <p>{data.hostname}</p>
          <h1 style={{fontWeight: 'bold', color: 'red' }}> Free Memory Percent: </h1> <p>{data.ram}</p>

    </div>      
  
  )
  }
  export default App
