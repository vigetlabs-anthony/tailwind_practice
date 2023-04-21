import { useState } from 'react'
import { clsx } from 'clsx';

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
  <div className={clsx('flex justify-center items-center h-screen', 
       {
         'bg-yellow-100': count > 2,
         'bg-yellow-200': count > 4,
         'bg-orange-300': count > 8,
         'bg-orange-400': count > 12,
         'bg-red-400': count > 16,
         'bg-violet-500': count > 20,
         "bg-[url(./assets/image.webp)] bg-cover": count > 25
       }
     )}>
      <div>
      <h1>Vite + React + Tailwind</h1>
      {count < 30 && (
        <div className='flex justify-center'>
          <button onClick={handleClick}>
            count is {count}
          </button>
        </div>
      )}
      {count === 30 && (
        <div className='flex justify-center'>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
      )}
      </div>
    </div>
    </>
  )
}

export default App
