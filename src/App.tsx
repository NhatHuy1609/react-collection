import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  const handleClick = (): void => {
    setCount((prev) => prev + 1)
  }

  return (
    <h1 onClick={handleClick} className=' text-center text-slate-600'>
      {count}
    </h1>
  )
}

export default App
