import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserToDos from '../../components/UserToDos';
import api from '../../services/api';
import { RootState } from '../../store';

import './styles.scss';

const ToDos: React.FunctionComponent = () => {
  const users = useSelector((state: RootState) => state.user.users);

  const [todos, setTodos] = useState<ToDo[]>([]);

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
          users && users.map((user: User) => (
            <UserToDos
              id={user.id}
              key={user.id}
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
