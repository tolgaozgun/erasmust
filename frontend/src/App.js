import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
//Student Pages
import RegisterStudent from "./pages/student/register";
import LoginStudent from "./pages/student/login";
import DashboardStudent from "./pages/student/dashboard";
import AccountStudent from './pages/student/account';
import SettingsStudent from './pages/student/settings';

//Stuff Pages
import RegisterStuff from "./pages/academic/register";
import LoginStuff from "./pages/academic/login";
import DashboardStuff from "./pages/academic/dashboard";

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


        <Route path='/registerStuff' element={<RegisterStuff/>}>
        </Route>
        <Route path='/loginStuff' element={<LoginStuff/>}>
        </Route>
        <Route path='/dashboardStuff' element={<DashboardStuff/>}>
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
