import React, { useState, useEffect } from 'react'

function App() {
  
  const [data, setData] = useState([{}]) 

  useEffect(() => {
      fetch("/host").then(
        res => res.json()
      ).then(
        data => {
            setData(data)
            console.log(data)
        }
      )
  }, [])

return (
  <body>
        <h1 style={{fontWeight: 'bold', color: 'red' }}> hostname </h1>
        <p>{data.host[0]}</p>

        <h1 style={{fontWeight: 'bold', color: 'red' }}> Free Memory Percent </h1>
        <p>{data.host[1]}</p>  
  </body>
)
}

export default App