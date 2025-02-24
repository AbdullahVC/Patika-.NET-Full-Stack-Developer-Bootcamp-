import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import './App.css'

function App() {
 
  return (
    <div className='note-app'>
      <h1>NotesApp</h1>
      <TodoCreate />
    </div>
  )
}

export default App
