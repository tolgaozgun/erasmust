import {IRoute} from "./IRoute";
import * as React from "react";

//Student Pages
import RegisterStudent from "./pages/student/register";
import LoginStudent from "./pages/student/login";
import DashboardStudent from "./pages/student/dashboard";
import AccountStudent from './pages/student/account';
import SettingsStudent from './pages/student/settings';
import ErasmusStudent from './pages/student/erasmus';
import Preapprovals from './pages/student/Preapprovals';
import Applications from './pages/student/Applications';
import Students from './pages/student/Students';
import Preapproval from "./pages/student/PreapprovalForm"
import LearningAgreement from "./pages/student/LearningAgreement"
import ErasmusApplicationForm from "./pages/student/erasmusApplication"
import CTForm from "./pages/student/courseTransferForm";
import ViewPreapproval from "./pages/student/ViewPreapproval"
import ViewErasmusApplication from "./pages/student/ViewErasmusApplication"

//Admin Pages
import DashboardAdmin from "./pages/admin/dashboard";
import AccountAdmin from "./pages/admin/account";
import StudentList from "./pages/admin/studentList";

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
import SchoolList from "./pages/academic/SchoolList";

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
        path: '/preapprovals',
        title: "Student Register",
        content: <Preapprovals/>,
        exact: true,
    },
    {
        path: '/preapproval',
        title: "Preapproval Form",
        content: <Preapproval/>,
        exact: true,
    }, ,
    {
        path: 'learningAgreement',
        title: "Learning Agreement",
        content: <LearningAgreement/>,
        exact: true,
    },
    {
        path: '/viewPreapproval',
        title: "Preapproval Form",
        content: <ViewPreapproval/>,
        exact: true,
    },
    {
        path: '/applications',
        title: "Student Register",
        content: <Applications/>,
        exact: true,
    },
    {
        path: '/students',
        title: "Student Register",
        content: <Students/>,
        exact: true,
    },
    {
        path: '/erasmusApplication',
        title: "Preapproval Form",
        content: <ErasmusApplicationForm/>,
        exact: true,
    },
    {
        path: '/ctForm',
        title: "Course Transfer Form",
        content: <CTForm/>,
        exact: true,
    },
    {
        path: '/dashboardAdmin',
        title: "Admin Dashboard",
        content: <DashboardAdmin/>,
        exact: true,
    },
    {
        path: '/accountAdmin',
        title: "Admin Account",
        content: <AccountAdmin/>,
        exact: true,
    },
    {
        path: "/schoolList",
        title: "School List",
        content: <SchoolList/>,
        exact: true,
    },
    {
        path: '/studentlistAdmin',
        title: "Admin Account",
        content: <StudentList/>,
        exact: true,
    },
    {
        path: '/dashboardAdmin',
        title: "Admin Dashboard",
        content: <DashboardAdmin/>,
        exact: true,
    },
    {
        path: '/accountAdmin',
        title: "Admin Account",
        content: <AccountAdmin/>,
        exact: true,
    },
    {
        path: '/viewPreapproval',
        title: "View Preapproval",
        content: <ViewPreapproval/>,
        exact: true,
    },
    {
        path: '/viewErasmusApplication',
        title: "View Erasmus Application",
        content: <ViewErasmusApplication/>,
        exact: true,
    },
    {
        path: '/studentlistAdmin',
        title: "Admin Account",
        content: <StudentList/>,
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
        //
    },
]


