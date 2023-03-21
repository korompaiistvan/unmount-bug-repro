import { useState } from 'react'
import './App.css'
import { Dropdown } from './components/Dropdown'

function App() {

  const itemClickHandler = () => {
    alert('Clicked')
  }

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
          <p onClick={itemClickHandler}>Item 1</p>
          <p onClick={itemClickHandler}>Item 2</p>
          <p onClick={itemClickHandler}>Item 3</p>
        </>
        </Dropdown>
        
    </div>
  )
}

export default App
