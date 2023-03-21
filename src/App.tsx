import { useState } from 'react'
import './App.css'
import { Dropdown } from './components/Dropdown'

function App() {

  const [closeTimeoutMs, setCloseTimeoutMs] = useState(100)

  const itemClickHandler = () => {
    alert('Clicked')
  }

  return (
    <div className="App">
      <p>
        Open the dropdown and click on the items.<br />The dropdown should close
        automatically after displaying an alert.
      </p>
      <p>
        Set the timeout to a lower value however <br /> and the dropdown will close
        before the alert is displayed. 
      </p>

      <div className='horizontal'>
        <Dropdown
          button={(toggleMenu) => (
            <button
              onClick={toggleMenu}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Dropdown toggle
            </button>
          )}
          closeTimeoutMs={closeTimeoutMs}
        >
          <>
            <p onClick={itemClickHandler}>Item 1</p>
            <p onClick={itemClickHandler}>Item 2</p>
            <p onClick={itemClickHandler}>Item 3</p>
          </>
        </Dropdown>
        <div className='timeout-wrapper'>
          <label htmlFor="timeout">Close timeout (ms)</label>
          <input id='timeout' type="number" value={closeTimeoutMs} onChange={(e) => setCloseTimeoutMs(Number(e.target.value))} />
        </div>
        </div>
    </div>
  )
}

export default App
