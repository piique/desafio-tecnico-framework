import React, { useEffect, useState } from 'react';
import UserToDos from '../../components/UserToDos';
import api from '../../services/api';

import './styles.scss';

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return api.get('users').then((response) => response.data);
  };

  const getTodos = () => {
    return api.get('todos').then((response) => response.data);
  };

  useEffect(() => {
    Promise.all([getUsers(), getTodos()]).then(([_users, _todos]) => {
      setUsers(_users);
      setTodos(_todos);
    });
  }, []);

  return (
    <div className="ToDos">
      <h1>To-Dos</h1>
      <div className="container">
        {
          users.map((user) => (
            <UserToDos
              id={user.id}
              name={user.name}
              todos={todos.filter((todo) => todo.userId === user.id)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ToDos;
