import axios from 'axios'
import React, {useEffect, useState} from 'react';

import './pages style/homepage.css';

function Homepage() {

  const url = 'http://127.0.0.1:8000/'
  const [tasks, setTasks] = useState([]);
  const getAllTask = () => {
    axios.get(url + 'todo/list/')
      .then(res => {
        setTasks(res.data)
        console.log(res.data)
      })
      .catch (err => {
        console.error(err);
      })
  }

  useEffect(() => {
    getAllTask()
  },[])
  
  return (
    <div className='home-container'>
      <header className="todo-header">
        Header
      </header>

      <div className='todo-input'>
          <input type="text" placeholder="Ajoutez un Todo"/>
          <button className='todo-field'> Valider</button>
        </div>
      <div className='todo-container'>
        <ul>
          {
            tasks.map(task => {

              return (
                <div className='todo-content'>
                  <input type="checkbox" className='todo-checkbox'/>
                  <li className='todo-li'>{task.title}</li>
                  <div className='home-button'>
                    <button className='todo-edit'>Edit</button>
                    <button classname="todo-delete">Delete</button>
                  </div>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Homepage