import { useState } from 'react'
import './App.css'
import MyForm from './UI/Myform/MyForm'

function App() {

  function fetchData(){
  }


  return (
    <div className="App">
      <MyForm submitForm={fetchData} />
    </div>
  )
}

export default App
