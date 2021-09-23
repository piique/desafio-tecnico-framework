import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserToDos from '../../components/UserToDos';
import api from '../../services/api';

import './styles.scss';

const ToDos = () => {
  const users = useSelector((state) => state.users);

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    return api.get('todos').then((response) => response.data);
  };

  useEffect(() => {
    getTodos().then((_todos) => {
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
