import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'
import MyForm from './UI/Myform/MyForm'

function App() {

  const [isPost, setIsPost] = useState(false)
  const [usersLi, setUsersLi] = useState([])

  const handleRemove =  async(event, userId) => {
    event.preventDefault();
     await Axios.delete(`http://localhost:5174/remove/users/${userId}`)
      .then(response => {
        const index = usersLi.findIndex(item => item.id === userId);
        
        if (index !== -1) {
          usersLi.splice(index, 1);
        }
        setUsersLi([...usersLi])
      })
      .catch(error => {
        console.log(error);
      });
  }



  return (
    <div className="App">
      {isPost && usersLi.length 
        ?
        usersLi.map(user =>
          <div className='cardUser' key={user.id}>
            <div>
              <li>{user.id}. Name: {user.userName}</li>
              <li>Comment: {user.comment}</li>
            </div>
            <button className='removeBtn' onClick={(event) => handleRemove(event, user.id)}>remove</button>
          </div>)
        :
        <MyForm setIsPost={setIsPost} setUsersLi={setUsersLi} />
      }
    </div>
  )
}

export default App
