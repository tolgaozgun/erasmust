import {IRoute} from "./IRoute";
import * as React from "react";

//Student Pages
import RegisterStudent from "./pages/student/register";
import LoginStudent from "./pages/student/login";
import DashboardStudent from "./pages/student/dashboard";
import AccountStudent from './pages/student/account';
import SettingsStudent from './pages/student/settings';
import ErasmusStudent from './pages/student/erasmus';
import Preapproval from './pages/student/preapproval';
import PreapprovalForm from "./pages/student/PreapprovalForm"

//Staff Pages
import RegisterStaff from "./pages/academic/register";
import LoginStaff from "./pages/academic/login";
import DashboardStaff from "./pages/academic/dashboard";
import AccountStaff from "./pages/academic/account";
import SettingsStaff from "./pages/academic/settings";
import ErasmusStaff from "./pages/academic/erasmus"

import Splash from "./pages/splash";
import Error from "./pages/404";

import {Navigate} from "react-router-dom";
import LearningAgreement from "./pages/student/LearningAgreement";

export const routeItems: Array<IRoute> = [
    {
        path: '/registerStudent',
        title: "Student Register",
        content: <RegisterStudent />,
        exact: true,
    },
    {
        path: '/loginStudent',
        title: "Student Register",
        content: <LoginStudent/>,
        exact: true,
    },
    {
        path: '/dashboardStudent',
        title: "Student Register",
        content: <DashboardStudent/>,
        exact: true,
    },
    {
        path: '/accountStudent',
        title: "Student Register",
        content: <AccountStudent/>,
        exact: true,
    },
    {
        path: '/settingsStudent',
        title: "Student Register",
        content: <SettingsStudent/>,
        exact: true,
    },
    {
        path: '/erasmusStudent',
        title: "Student Register",
        content: <ErasmusStudent/>,
        exact: true,
    },
    {
        path: '/registerStaff',
        title: "Student Register",
        content: <RegisterStaff/>,
        exact: true,
    },
    {
        path: '/loginStaff',
        title: "Student Register",
        content: <LoginStaff/>,
        exact: true,
    },
    {
        path: '/dashboardStaff',
        title: "Student Register",
        content: <DashboardStaff/>,
        exact: true,
    },
        {
            path: '/accountStaff',
            title: "Student Register",
            content: <AccountStaff/>,
            exact: true,
        },
        {
            path: '/settingsStaff',
            title: "Student Register",
            content: <SettingsStaff/>,
            exact: true,
        },
        {
            path: '/erasmusStaff',
            title: "Student Register",
            content: <ErasmusStaff/>,
            exact: true,
        },
        {
            path: '/preapproval',
            title: "Student Register",
            content: <Preapproval/>,
            exact: true,
        },
    {
        path: 'preapprovalForm',
        title: "Preapproval Form",
        content: <PreapprovalForm />,
        exact: true,
    },
        {
            path: '*',
            title: "Student Register",
            content: <Error/>,
            exact: false,
        },
        {
            path: '/splash',
            title: "Student Register",
            content: <Splash/>,
            exact: true,
        },
        {
            path: '/',
            title: "Student Register",
            content: <Navigate to='/splash' />,
            exact: true,
        },
    {
        path: 'learningAgreement',
        title: 'Learning Agreement',
        content: <LearningAgreement/>,
        exact: true
    }
]


