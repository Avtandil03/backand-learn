import { useState } from 'react'
import './App.css'
import MyForm from './UI/Myform/MyForm'

function App() {

  const [isPost, setIsPost] = useState(false)  
  const [usersLi, setUsersLi] = useState([])

  return (
    <div className="App">
      {isPost 
      ?
        usersLi.map(user => 
          <div className='cardUser' key={user.id}>
             <li>{user.id}. Name: {user.userName}</li> 
             <li>Comment: {user.comment}</li> 
          </div>)
      :
      <MyForm setIsPost={setIsPost} setUsersLi={setUsersLi}/>
      }
    </div>
  )
}

export default App
