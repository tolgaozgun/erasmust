import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { routeItems } from "./routeConfig.tsx";
import { routeItemsDefault } from "./routeConfigDefault.tsx";

// Student
import { routeItemsStudent } from "./routeConfigStudent.tsx";

// Admin
import { routeItemsAdmin } from "./routeConfigAdmin.tsx";

// Staff
import { routeItemsDean } from "./routeConfigDean.tsx";
import { routeItemsBoard } from "./routeConfigBoard.tsx";
import { routeItemsCourseCoordinator } from "./routeConfigCourseCoordinator.tsx";
import { routeItemsErasmusCoordinator } from "./routeConfigErasmusCoordinator.tsx";

const App = () => {
    const [routes, setRoutes] = useState(routeItemsDefault);

    let role = sessionStorage.getItem("role");
    useEffect(() => {
        switch (role) {
            case "ADMIN":
                setRoutes(routeItemsAdmin);
                break;
            case "STUDENT":
                setRoutes(routeItemsStudent);
                break;

            case "DEAN":
                setRoutes(routeItemsDean);
                break;
            case "BOARD":
                setRoutes(routeItemsBoard);
                break;
            case "COURSE_COORDINATOR":
                setRoutes(routeItemsCourseCoordinator);
                break;
            case "ERASMUS_COORDINATOR":
                setRoutes(routeItemsErasmusCoordinator);
                break;

            case null:
            default:
                setRoutes(routeItemsDefault);
                break;
        }
    }, [role]);
    return (
        <BrowserRouter>
            <Routes>
                {routeItems.map((routeItem) => (
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
};

export default App;
