import { useState, useEffect, useCallback } from "react"
import "./App.css"

function App() {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(true)

  // 이부분은 넘버가 변하고 호출했을때만 반응한다
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`)
    return
  }, [number])

  // someFunction이 변했을떄 계속호출됨
  useEffect(() => {
    console.log("someFunction이 변경되었습니다")
  }, [someFunction])

  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default App
