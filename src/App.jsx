import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cookies from 'js-cookie'


function App() {
  const [count, setCount] = useState(0)
  console.log(document.cookie);

  // let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)company\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  // console.log(cookieValue);

  const cookieData = Cookies.get('data');
  console.log(cookieData);
  const data = JSON.parse(cookieData);
  console.log("Name = "+data.name+" & Company = "+data.company);
  
  Cookies.set('page', 'subdomain', {path:'/', domain:'.singleufo.com'});
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
