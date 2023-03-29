import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-2xl font-bold text-gray-900'>Flex</h1>

      <p className='mt-5 font-semibold text-gray-900 font-mono'>`flex-row hover:flex-column`</p>
      <div className="flex flex-row hover:flex-col">
        <div className='m-1 bg-amber-300'>01</div>
        <div className='m-1 bg-amber-300'>02</div>
        <div className='m-1 bg-amber-300'>03</div>
        <div className='m-1 bg-amber-300'>04</div>
        <div className='m-1 bg-amber-300'>05</div>
        <div className='m-1 bg-amber-300'>06</div>
        <div className='m-1 bg-amber-300'>07</div>
        <div className='m-1 bg-amber-300'>08</div>
        <div className='m-1 bg-amber-300'>09</div>
      </div>

      <p className='mt-10 font-semibold text-gray-900 font-mono'>`flex-col hover:flex-row`</p>
      <div className="flex flex-col hover:flex-row">
        <div className='m-1 bg-emerald-300'>01</div>
        <div className='m-1 bg-emerald-300'>02</div>
        <div className='m-1 bg-emerald-300'>03</div>
        <div className='m-1 bg-emerald-300'>04</div>
        <div className='m-1 bg-emerald-300'>05</div>
        <div className='m-1 bg-emerald-300'>06</div>
        <div className='m-1 bg-emerald-300'>07</div>
        <div className='m-1 bg-emerald-300'>08</div>
        <div className='m-1 bg-emerald-300'>09</div>
      </div>

      <p className='mt-10 font-semibold text-gray-900 font-mono'>`flex-row flex-no-wrap`</p>
      <div className="flex flex-row flex-no-wrap">
        <div className='m-1 px-20 bg-indigo-300'>01</div>
        <div className='m-1 px-20 bg-indigo-300'>02</div>
        <div className='m-1 px-20 bg-indigo-300'>03</div>
        <div className='m-1 px-20 bg-indigo-300'>04</div>
        <div className='m-1 px-20 bg-indigo-300'>05</div>
        <div className='m-1 px-20 bg-indigo-300'>06</div>
        <div className='m-1 px-20 bg-indigo-300'>07</div>
        <div className='m-1 px-20 bg-indigo-300'>08</div>
        <div className='m-1 px-20 bg-indigo-300'>09</div>
      </div>

      <p className='mt-10 font-semibold text-gray-900 font-mono'>`flex-row flex-wrap`</p>
      <div className="flex flex-row flex-wrap">
        <div className='m-1 px-20 bg-indigo-400'>01</div>
        <div className='m-1 px-20 bg-indigo-400'>02</div>
        <div className='m-1 px-20 bg-indigo-400'>03</div>
        <div className='m-1 px-20 bg-indigo-400'>04</div>
        <div className='m-1 px-20 bg-indigo-400'>05</div>
        <div className='m-1 px-20 bg-indigo-400'>06</div>
        <div className='m-1 px-20 bg-indigo-400'>07</div>
        <div className='m-1 px-20 bg-indigo-400'>08</div>
        <div className='m-1 px-20 bg-indigo-400'>09</div>
      </div>

      <h1 className='text-2xl font-bold text-gray-900 mt-10'>Grid</h1>

      <div className="grid grid-cols-4 gap-2 mt-10">
        <div className='bg-fuchsia-300'>01</div>
        <div className='bg-fuchsia-300'>02</div>
        <div className='col-span-2 bg-fuchsia-600'>03</div>
        <div className='bg-fuchsia-300'>04</div>
        <div className='bg-fuchsia-300'>05</div>
        <div className='bg-fuchsia-300'>06</div>
        <div className='bg-fuchsia-300'>07</div>
        <div className='bg-fuchsia-300'>08</div>
        <div className='bg-fuchsia-300'>09</div>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-2">
        <div className='bg-fuchsia-300'>01</div>
        <div className='bg-fuchsia-300'>02</div>
        <div className='bg-fuchsia-300'>03</div>
        <div className='bg-fuchsia-300'>04</div>
        <div className='bg-fuchsia-300'>05</div>
        <div className='bg-fuchsia-300'>06</div>
        <div className='bg-fuchsia-300'>07</div>
        <div className='bg-fuchsia-300'>08</div>
        <div className='bg-fuchsia-300'>09</div>
      </div>

      <div className="mt-10 grid grid-rows-6 grid-flow-col gap-1">
        <div className='row-span-2 bg-pink-500'>01</div>
        <div className='bg-pink-300'>02</div>
        <div className='bg-pink-300'>03</div>
        <div className='bg-pink-300'>04</div>
        <div className='bg-pink-300'>05</div>
        <div className='bg-pink-300'>06</div>
        <div className='bg-pink-300'>07</div>
        <div className='bg-pink-300'>08</div>
        <div className='bg-pink-300'>09</div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-1">
        <div className='bg-sky-300'>01</div>
        <div className='bg-sky-300'>02</div>
        <div className='bg-sky-300'>03</div>
        <div className='bg-sky-300'>04</div>
        <div className='bg-sky-300'>05</div>
        <div className='bg-sky-300'>06</div>
        <div className='bg-sky-300'>07</div>
        <div className='bg-sky-300'>08</div>
        <div className='bg-sky-300'>09</div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-1">
        <div className='grid grid-rows-3 gap-1'>
          <div className='bg-sky-300'>01</div>
          <div className='bg-sky-300'>02</div>
          <div className='bg-sky-300'>03</div>
        </div>
        <div className='grid grid-rows-3 gap-1 col-span-2'>
          <div className='bg-sky-300'>01</div>
          <div className='bg-sky-300'>02</div>
          <div className='bg-sky-300'>03</div>
        </div>
      </div>

      <div className="mt-10 grid grid-row-3 gap-1">
        <div className='grid grid-cols-3 gap-1'>
          <div className='bg-sky-300'>01</div>
          <div className='bg-sky-300'>02</div>
          <div className='bg-sky-300'>03</div>
        </div>
        <div className='grid grid-cols-3 gap-1'>
          <div className='bg-sky-300'>01</div>
          <div className='bg-sky-300'>02</div>
          <div className='bg-sky-300'>03</div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 grid-rows-3 gap-1">
        <div className='col-span-2 bg-lime-300'>01</div>
        <div className='row-span-2 bg-lime-300'>02</div>
        <div className='col-span-2 bg-lime-300'>03</div>
        <div className='bg-lime-300'>04</div>
        <div className='bg-lime-300'>05</div>
        <div className='bg-lime-300'>06</div>
        <div className='bg-lime-300'>07</div>
        <div className='bg-lime-300'>08</div>
        <div className='bg-lime-300'>09</div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-1 grid-flow-row-dense">
        <div className='col-span-2 bg-teal-300'>01</div>
        <div className='col-span-2 bg-teal-300'>02</div>
        <div className='bg-teal-300'>03</div>
        <div className='bg-teal-300'>04</div>
        <div className='col-span-2 bg-teal-300'>05</div>
        <div className='col-span-2 bg-teal-300'>06</div>
        <div className='bg-teal-300'>07</div>
        <div className='bg-teal-300'>08</div>
        <div className='bg-teal-300'>09</div>
      </div>

    </div>
  )
}

export default App
