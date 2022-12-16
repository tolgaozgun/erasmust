import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import {routeItems} from "./routeConfig.tsx";
import {routeItemsStudent} from "./routeConfigStudent.tsx"
import {routeItemsAdmin} from "./routeConfigAdmin.tsx"
import {routeItemsDefault} from "./routeConfigDefault.tsx"

const App = () => {
    const [routes, setRoutes] = useState(routeItemsDefault)

    let role = sessionStorage.getItem("role")
    useEffect(() => {
        switch (role) {
            case "ADMIN":
                setRoutes(routeItemsAdmin);
                break;
            case "STUDENT":
                setRoutes(routeItemsStudent);
                break;
            case null:
            default:
                setRoutes(routeItemsDefault);
                break;
        }
    }, [role])
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
