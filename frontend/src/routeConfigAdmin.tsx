import {IRoute} from "./IRoute";
import * as React from "react";
import StudentPreapprovalList from './pages/student/Preapproval/StudentErasmusPreapprovalList';
import Applications from './pages/student/Applications';
import Students from './pages/student/Students';
import ViewPreapproval from "./pages/student/Preapproval/ViewPreapproval"
import ViewErasmusApplication from "./pages/student/ErasmusApplication/ViewErasmusApplication"
import EditPreapproval from "./pages/student/Preapproval/EditPreapproval"
import CourseReviewForms from "./pages/student/CourseReviewForm/StudentErasmusCourseReviewForms";
import DashboardAdmin from "./pages/admin/dashboard";
import AccountAdmin from "./pages/admin/account";
import StudentList from "./pages/admin/studentList";
import StudentEdits from "./pages/admin/edits/studentEdit";
import Splash from "./pages/splash";
import Error from "./pages/404";
import {Navigate} from "react-router-dom";
import SchoolList from "./pages/academic/SchoolList";

import RegisterStaff from "./pages/academic/register";
import LoginStaff from "./pages/academic/login";

// Admin
export const routeItemsAdmin: Array<IRoute> = [
    {
        path: '/dashboardAdmin',
        title: "Admin Dashboard",
        content: <DashboardAdmin/>,
        exact: true,
    },
    {
        
        path: '/studentListAdmin',
        title: "Admin Account",
        content: <StudentList/>,
        exact: true,
    },
    {
        
        path: '/studentListAdmin/student/:id',
        title: "Admin Account",
        content: <StudentEdits/>,
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
        path: '/studentlistAdmin',
        title: "Admin Account",
        content: <StudentList/>,
        exact: true,
    },

    {
        path: '/EditPreapproval',
        title: "Edit Preapproval Form",
        content: <EditPreapproval/>,
        exact: true,
    },

    {
        path: '/students',
        title: "Students",
        content: <Students/>,
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