import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from './routes';
import api from './services/api';
import { setUsers } from './actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('users').then((response) => dispatch(setUsers(response.data)));
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
