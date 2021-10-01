import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from './routes';
import api from './services/api';
import { setUsers } from './store/User/User.actions';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('users').then((response: { data: User[]; }) => dispatch(setUsers(response.data)));
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
