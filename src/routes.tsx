import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import NotFoundPage from './pages/NotFound';
import PostsPage from './pages/Posts';
import AlbumsPage from './pages/Albums';
import ToDosPage from './pages/ToDos';

const Routes: React.FunctionComponent = () => {
  const menuItems = [
    { title: 'Postagens', path: '/postagens' },
    { title: 'Álbuns', path: '/albuns' },
    { title: 'TO-DOs', path: '/todos' },
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/postagens" />
        <Route
          path="/postagens"
          component={() => (
            <MainLayout menuItems={menuItems}>
              <PostsPage />
            </MainLayout>
          )}
        />
        <Route
          path="/albuns"
          component={() => (
            <MainLayout menuItems={menuItems}>
              <AlbumsPage />
            </MainLayout>
          )}
        />
        <Route
          path="/todos"
          component={() => (
            <MainLayout menuItems={menuItems}>
              <ToDosPage />
            </MainLayout>
          )}
        />
        <Route component={() => (
          <NotFoundPage />
        )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
