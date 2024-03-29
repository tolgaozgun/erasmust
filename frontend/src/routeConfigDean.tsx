// import {IRoute} from "./IRoute";
// import * as React from "react";
//
// import CTForm from "./pages/student/courseTransferForm";
// import RegisterStaff from "./pages/academic/register";
// import LoginStaff from "./pages/academic/login";
// import DashboardStaff from "./pages/academic/dashboard";
// import AccountStaff from "./pages/academic/account";
// import SettingsStaff from "./pages/academic/settings";
// import ErasmusStaff from "./pages/academic/erasmus"
// import Splash from "./pages/splash";
// import Error from "./pages/404";
// import {Navigate} from "react-router-dom";
// import SchoolList from "./pages/academic/SchoolList";
//
// export const routeItemsDean: Array<IRoute> = [
//     {
//         path: '*',
//         title: "Student Register",
//         content: <Error/>,
//         exact: false,
//     },
//     {
//         path: '/splash',
//         title: "Student Register",
//         content: <Splash/>,
//         exact: true,
//     },
//     {
//         path: '/registerStaff',
//         title: "Staff Register",
//         content: <RegisterStaff/>,
//         exact: true,
//     },
//     {
//         path: '/loginStaff',
//         title: "Staff Login",
//         content: <LoginStaff/>,
//         exact: true,
//     },
//     {
//         path: '/dashboardStaff',
//         title: "Staff Dashboard",
//         content: <DashboardStaff/>,
//         exact: true,
//     },
//     {
//         path: '/accountStaff',
//         title: "Staff Account",
//         content: <AccountStaff/>,
//         exact: true,
//     },
//     {
//         path: '/settingsStaff',
//         title: "Staff Settings",
//         content: <SettingsStaff/>,
//         exact: true,
//     },
//     {
//         path: '/erasmusStaff',
//         title: "Staff Erasmus Page",
//         content: <ErasmusStaff/>,
//         exact: true,
//     },
//     {
//         path: '*',
//         title: "Student Register",
//         content: <Navigate to='/splash' />,
//         exact: true,
//     },
//     {
//         path: "/schoolList",
//         title: "School List",
//         content: <SchoolList/>,
//         exact: true,
//     },
//
//     {
//         path: '/ctForm',
//         title: "Course Transfer Form",
//         content: <CTForm/>,
//         exact: true,
//     },
// ]