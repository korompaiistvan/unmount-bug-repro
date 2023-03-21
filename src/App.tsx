import { useState } from 'react'
import './App.css'
import { Dropdown } from './components/Dropdown'

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <div className="App">
      <Dropdown
        button={(toggleMenu) => (
          <button
            onClick={toggleMenu}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Dropdown toggle
          </button>
        )}
      >
        <>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </>
        </Dropdown>
        
    </div>
  )
}

export default App
