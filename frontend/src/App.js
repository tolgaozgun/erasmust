import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import RegisterStudent from "./pages/student/Register";
import LoginStudent from "./pages/student/Login";
import DashboardStudent from "./pages/student/Dashboard";

import RegisterStuff from "./pages/academic/Register";
import LoginStuff from "./pages/academic/Login";
import DashboardStuff from "./pages/academic/Dashboard";

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
