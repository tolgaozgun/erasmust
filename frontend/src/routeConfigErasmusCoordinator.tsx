import {IRoute} from "./IRoute";
import * as React from "react";

import Applications from './pages/student/Applications';
import ErasmusApplicationForm from "./pages/student/ErasmusApplication/erasmusApplication"
import CTForm from "./pages/student/courseTransferForm";
import ViewPreapproval from "./pages/student/Preapproval/ViewPreapproval"
import ViewErasmusApplication from "./pages/student/ErasmusApplication/ViewErasmusApplication"
import StaffCourseReviewForm from "./pages/student/StaffCourseReviewForm"
import StaffPreapprovalForm from "./pages/student/Preapproval/StaffPreapprovalForm"
import CourseReviewForms from "./pages/student/CourseReviewForm/CourseReviewForms";
import ViewCourseReviewForm from "./pages/student/CourseReviewForm/ViewCourseReviewForm";
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
import Submissions from "./pages/academic/submissions";

export const routeItemsErasmusCoordinator: Array<IRoute> = [
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
    },
    {
        path: '/dashboardStaff',
        title: "Staff Dashboard",
        content: <DashboardStaff/>,
        exact: true,
    },
    {
        path: '/accountStaff',
        title: "Staff Account",
        content: <AccountStaff/>,
        exact: true,
    },
    {
        path: '/settingsStaff',
        title: "Staff Settings",
        content: <SettingsStaff/>,
        exact: true,
    },
    {
        path: '/erasmusStaff',
        title: "Staff Erasmus Page",
        content: <ErasmusStaff/>,
        exact: true,
    },
    {
        path: '*',
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
        path: '/StaffCourseReviewForm',
        title: "Staff Course Review Form",
        content: <StaffCourseReviewForm/>,
        exact: true,
    },

     {
        path: '/ViewCourseReviewForm',
        title: "View Review Form",
        content: <ViewCourseReviewForm/>,
        exact: true,
    },
    {
        path: '/courseReviewForms',
        title: "Course Review Forms",
        content: <CourseReviewForms/>,
        exact: true,
    },

    {
        path: '/StaffPreapprovalForm',
        title: "Staff Preapproval Form",
        content: <StaffPreapprovalForm/>,
        exact: true,
    },
    {
        path: '/viewPreapproval',
        title: "View Preapproval",
        content: <ViewPreapproval/>,
        exact: true,
    },
    {
        path: '/viewPreapproval',
        title: "View Preapproval Form",
        content: <ViewPreapproval/>,
        exact: true,
    },

    {
        path: '/ViewErasmusApplication',
        title: "View Erasmus Application",
        content: <ViewErasmusApplication/>,
        exact: true,
    },
    {
        path: '/erasmusApplication',
        title: "Erasmus Application",
        content: <ErasmusApplicationForm/>,
        exact: true,
    }, 
    {
        path: '/viewErasmusApplication',
        title: "View Erasmus Application",
        content: <ViewErasmusApplication/>,
        exact: true,
    },

    {
        path: "/submissions",
        title: "Submissions",
        content: <Submissions/>,
        exact: true,
    },
    
    {
        path: '/ctForm',
        title: "Course Transfer Form",
        content: <CTForm/>,
        exact: true,
    },

    { 
        path: '/applications',
        title: "Applications",
        content: <Applications/>,
        exact: true,
    },
]