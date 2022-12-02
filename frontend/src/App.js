import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import React from 'react';
//Student Pages
import RegisterStudent from "./pages/student/register";
import LoginStudent from "./pages/student/login";
import DashboardStudent from "./pages/student/dashboard";
import AccountStudent from './pages/student/account';
import SettingsStudent from './pages/student/settings';
import ErasmusStudent from './pages/student/erasmus';

//Stuff Pages
import RegisterStaff from "./pages/academic/register";
import LoginStaff from "./pages/academic/login";
import DashboardStaff from "./pages/academic/dashboard";
import AccountStaff from "./pages/academic/account";
import SettingsStaff from "./pages/academic/settings";
import ErasmusStaff from "./pages/academic/erasmus"

import Splash from "./pages/splash";
import Error from "./pages/404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/registerStudent' element={<RegisterStudent/>}>
        </Route>
        <Route path='/loginStudent' element={<LoginStudent/>}>
        </Route>
        <Route path='/dashboardStudent' element={<DashboardStudent/>}>
        </Route>
        <Route path='/accountStudent' element={<AccountStudent/>}>
        </Route>
        <Route path='/settingStudent' element={<SettingsStudent/>}>
        </Route>
        <Route path='/erasmusStudent' element={<ErasmusStudent/>}>
        </Route>


        <Route path='/registerStaff' element={<RegisterStaff/>}>
        </Route>
        <Route path='/loginStaff' element={<LoginStaff/>}>
        </Route>
        <Route path='/dashboardStaff' element={<DashboardStaff/>}>
        </Route>
        <Route path='/accountStaff' element={<AccountStaff/>}>
        </Route>
        <Route path='/settingStaff' element={<SettingsStaff/>}>
        </Route>
        <Route path='/erasmusStaff' element={<ErasmusStaff/>}>
        </Route>

        <Route path='*' element={<Error/>}>
        </Route>
        <Route path='/splash' element={<Splash/>}>
        </Route>


        <Route exact path='/' element={<Navigate to='/splash'/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
