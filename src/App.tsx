import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutePath, routes } from './routes';
import './App.scss';
import NoMatch from './pages/NoMatch/NoMatch';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route
              index={RoutePath.HOME === route.path}
              path={route.path}
              element={<route.component />}
              key={route.name}
            />
          ))}
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}
