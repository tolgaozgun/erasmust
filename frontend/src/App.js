import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import React from 'react';

import {routeItems} from "./routeConfig.tsx";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeItems.map(routeItem => (
          <Route
            key={routeItem.title}
            path={routeItem.path}
            exact={routeItem.exact}
            element={routeItem.content}
            />
        ))}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
