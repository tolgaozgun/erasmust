import {IRoute} from "./IRoute";
import * as React from "react";

//Student Pages
import RegisterStudent from "./pages/student/register";
import LoginStudent from "./pages/student/login";
import DashboardStudent from "./pages/student/dashboard";
import AccountStudent from './pages/student/account';
import SettingsStudent from './pages/student/settings';
import ErasmusStudent from './pages/student/erasmus';
import Preapprovals from './pages/student/Preapproval/Preapprovals';
import Applications from './pages/student/Applications';
import Students from './pages/student/Students';
import Preapproval from "./pages/student/Preapproval/PreapprovalForm"
import BeforeMobility from "./pages/student/LearningAgreement/BeforeMobility"
import DuringMobility from "./pages/student/LearningAgreement/DuringMobility"
import AfterMobility from "./pages/student/LearningAgreement/AfterMobility"
import ViewBeforeMobility from "./pages/student/LearningAgreement/ViewBeforeMobility"
import ErasmusApplicationForm from "./pages/student/ErasmusApplication/erasmusApplication"
import CTForm from "./pages/student/courseTransferForm";
import ViewPreapproval from "./pages/student/Preapproval/ViewPreapproval"
import ViewErasmusApplication from "./pages/student/ErasmusApplication/ViewErasmusApplication"
import CourseReviewForm from "./pages/student/CourseReviewForm/courseReviewForm"
import StaffCourseReviewForm from "./pages/student/StaffCourseReviewForm"
import StaffPreapprovalForm from "./pages/student/Preapproval/StaffPreapprovalForm"
import EditPreapproval from "./pages/student/Preapproval/EditPreapproval"
import CourseReviewForms from "./pages/student/CourseReviewForm/CourseReviewForms";
import ViewCourseReviewForm from "./pages/student/CourseReviewForm/ViewCourseReviewForm";

//Admin Pages
import DashboardAdmin from "./pages/admin/dashboard";
import AccountAdmin from "./pages/admin/account";

//Lists
import StudentList from "./pages/admin/studentList";

//Edits
import StudentEdits from "./pages/admin/edits/studentEdit";

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
import ExchangeFaq from "./pages/student/exchangeFaq";

import Submissions from "./pages/academic/submissions";


export const routeItems: Array<IRoute> = [
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
        path: '/preapprovals',
        title: "Preapproval List",
        content: <Preapprovals/>,
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
        path: 'learningAgreement/ViewBeforeMobility',
        title: "Learning Agreement View Before Mobility",
        content: <ViewBeforeMobility/>,
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
        path: '/students',
        title: "Students",
        content: <Students/>,
        exact: true,
    },
    {
        path: '/erasmusApplication',
        title: "Erasmus Application",
        content: <ErasmusApplicationForm/>,
        exact: true,
    },
    {
        path: '/ViewErasmusApplication',
        title: "View Erasmus Application",
        content: <ViewErasmusApplication/>,
        exact: true,
    },
    {
        path: '/courseReviewForm',
        title: "Course Review Form",
        content: <CourseReviewForm/>,
        exact: true,
    },
    {
        path: '/ViewCourseReviewForm',
        title: "View Review Form",
        content: <ViewCourseReviewForm/>,
        exact: true,
    },
    {
        path: '/StaffCourseReviewForm',
        title: "Staff Course Review Form",
        content: <StaffCourseReviewForm/>,
        exact: true,
    },
    {
        path: '/StaffPreapprovalForm',
        title: "Staff Preapproval Form",
        content: <StaffPreapprovalForm/>,
        exact: true,
    },
    {
        path: '/EditPreapproval',
        title: "Edit Preapproval Form",
        content: <EditPreapproval/>,
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
        path: "/schoolList",
        title: "School List",
        content: <SchoolList/>,
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
        path: '/courseReviewForms',
        title: "Course Review Forms",
        content: <CourseReviewForms/>,
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
        path: '/exchangeFaq',
        title: "Exchange FAQ",
        content: <ExchangeFaq/>,
        exact: true,
    },
    {
        path: "/submissions",
        title: "Submissions",
        content: <Submissions/>,
        exact: true,
    }
]