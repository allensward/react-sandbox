import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const title = 'REACT';
const plea = 'HELP ME, ';
const expo = 'YOU\'RE MY ONLY HOPE!';

const welcome = {
  title: title,
  greeting: plea,
  extra: expo
}

const dropdownOptions = [1,2,3,4,5]

function getTitle(title){
  return title;
}

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <div>
          <h1>{welcome.greeting}{getTitle(title)}. {welcome.extra}</h1>
        </div>
        <div>
          <label htmlFor='search'>Search:</label>
          <input id='search' type='text' />
        </div>
        <div>
          <select>
            {
              dropdownOptions.map(x => <option>{x}</option>)
            }
          </select>
        </div>
        
        
      </div>
  )
}

export default App
