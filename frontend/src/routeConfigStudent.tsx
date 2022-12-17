import {IRoute} from "./IRoute";
import * as React from "react";
import RegisterStudent from "./pages/student/register";
import LoginStudent from "./pages/student/login";
import DashboardStudent from "./pages/student/dashboard";
import AccountStudent from './pages/student/account';
import SettingsStudent from './pages/student/settings';
import ErasmusStudent from './pages/student/erasmus';
import StudentPreapprovalList from './pages/student/Preapproval/StudentErasmusPreapprovalList';
import Applications from './pages/student/Applications';
import Preapproval from "./pages/student/Preapproval/PreapprovalForm"
import BeforeMobility from "./pages/student/LearningAgreement/BeforeMobility"
import DuringMobility from "./pages/student/LearningAgreement/DuringMobility"
import AfterMobility from "./pages/student/LearningAgreement/AfterMobility"
import ViewPreapproval from "./pages/student/Preapproval/ViewPreapproval"
import ViewErasmusApplication from "./pages/student/ErasmusApplication/ViewErasmusApplication"
import CourseReviewForms from "./pages/student/CourseReviewForm/StudentErasmusCourseReviewForms";
import Splash from "./pages/splash";
import Error from "./pages/404";
import {Navigate} from "react-router-dom";
import SchoolList from "./pages/academic/SchoolList";
import ExchangeFaq from "./pages/student/exchangeFaq";

// Student
export const routeItemsStudent: Array<IRoute> = [
    {
        path: '/registerStudent',
        title: "Student Register",
        content: <RegisterStudent />,
        exact: true,
    },
    {
        path: '/loginStudent',
        title: "Student Login",
        content: <LoginStudent/>,
        exact: true,
    },
    {
        path: '/dashboardStudent',
        title: "Student Dashboard",
        content: <DashboardStudent/>,
        exact: true,
    },
    {
        path: '/accountStudent',
        title: "Student Account",
        content: <AccountStudent/>,
        exact: true,
    },
    {
        path: '/settingsStudent',
        title: "Student Settings",
        content: <SettingsStudent/>,
        exact: true,
    },
    {
        path: '/erasmusStudent',
        title: "Student Erasmus Page",
        content: <ErasmusStudent/>,
        exact: true,
    },
    {
        path: '/exchangeFaq',
        title: "Exchange FAQ",
        content: <ExchangeFaq/>,
        exact: true,
    },

    {
        path: '/preapproval',
        title: "Preapproval Form",
        content: <Preapproval/>,
        exact: true,
    },
    {
        path: 'learningAgreement/beforeMobility',
        title: "Learning Agreement Before Mobility",
        content: <BeforeMobility/>,
        exact: true,
    },
    {
        path: 'learningAgreement/duringMobility',
        title: "Learning Agreement During Mobility",
        content: <DuringMobility/>,
        exact: true,
    },
    {
        path: 'learningAgreement/afterMobility',
        title: "Learning Agreement After Mobility",
        content: <AfterMobility/>,
        exact: true,
    },

    {
        path: '/ViewErasmusApplication',
        title: "View Erasmus Application",
        content: <ViewErasmusApplication/>,
        exact: true,
    },

    {
        path: '/preapprovals',
        title: "Preapproval List",
        content: <StudentPreapprovalList/>,
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
        path: "/schoolList",
        title: "School List",
        content: <SchoolList/>,
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
        path: '/courseReviewForms',
        title: "Course Review Forms",
        content: <CourseReviewForms/>,
        exact: true,
    },

    {
        path: '/viewPreapproval',
        title: "View Preapproval Form",
        content: <ViewPreapproval/>,
        exact: true,
    },
    { 
        path: '/applications',
        title: "Applications",
        content: <Applications/>,
        exact: true,
    },
]