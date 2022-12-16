import {IRoute} from "./IRoute";
import * as React from "react";
import RegisterStudent from "./pages/student/register";
import LoginStudent from "./pages/student/login";
import DashboardStudent from "./pages/student/dashboard";
import AccountStudent from './pages/student/account';
import SettingsStudent from './pages/student/settings';
import ErasmusStudent from './pages/student/erasmus';
import Preapprovals from './pages/student/Preapproval/Preapprovals';
import Applications from './pages/student/Applications';
import Preapproval from "./pages/student/Preapproval/PreapprovalForm"
import BeforeMobility from "./pages/student/LearningAgreement/BeforeMobility"
import DuringMobility from "./pages/student/LearningAgreement/DuringMobility"
import AfterMobility from "./pages/student/LearningAgreement/AfterMobility"
import ViewPreapproval from "./pages/student/Preapproval/ViewPreapproval"
import ViewErasmusApplication from "./pages/student/ErasmusApplication/ViewErasmusApplication"
import CourseReviewForms from "./pages/student/CourseReviewForm/CourseReviewForms";
import Splash from "./pages/splash";
import Error from "./pages/404";
import {Navigate} from "react-router-dom";
import SchoolList from "./pages/academic/SchoolList";
import ExchangeFaq from "./pages/student/exchangeFaq";

import RegisterStaff from "./pages/academic/register";
import LoginStaff from "./pages/academic/login";

// Student
export const routeItemsDefault: Array<IRoute> = [
    {
        path: '/registerStudent',
        title: "Student Register",
        content: <RegisterStudent/>,
        exact: true,
    },
    {
        path: '/loginStudent',
        title: "Student Login",
        content: <LoginStudent/>,
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
        content: <Navigate to='/splash'/>,
        exact: true,
    },
    {
        path: '/registerStaff',
        title: "Staff Register",
        content: <RegisterStaff/>,
        exact: true,
    },
    {
        path: '/loginStaff',
        title: "Staff Login",
        content: <LoginStaff/>,
        exact: true,
    }
]