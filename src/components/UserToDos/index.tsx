import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

type Props = {
  id: number | undefined,
  name: string | undefined,
  todos: Array<ToDo> 
}

const UserToDos: React.FunctionComponent<Props> = ({ id, name, todos } :  Props) => {
  return (
    <div key={id} className="UserToDos">
      <div className="title">
        {name}
      </div>
      <div className="user-todos scroll">
        {
          todos.map((todo) => (
            <div key={`${id}${todo.id}`} className="todo">
              <div className="todo-task">
                {todo.title}
              </div>
              {
                todo.completed
                  ? (
                    <div className="state" style={{ backgroundColor: '#338f13' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" color="white" width="30" height="30" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </div>
                  )
                  : (
                    <div className="state" style={{ backgroundColor: '#8f1a13' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" color="white" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

// UserToDos.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   todos: PropTypes.arrayOf(PropTypes.object),
// };

// UserToDos.defaultProps = {
//   todos: [],
// };

export default UserToDos;
