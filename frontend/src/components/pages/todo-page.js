import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TodoDetail(props) {

  const { id } = props.match.params; // get the id parameter from the URL
  const [todo, setTodo] = useState({});

  const url = 'http://127.0.0.1:8000/';


  useEffect = task => {
    axios.get(url+ `todo/${task.id}/details/`)
      .then(res => {
        setTodo(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }


  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  )
}

export default TodoDetail;
