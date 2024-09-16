import React from 'react'
import MotorComponent from './pages/motor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CaravanComponent from './pages/caravan'
import TuningComponent from './pages/tuning'
import UsedCarComponent from './pages/used-car'
import CampingComponent from './pages/camping'
import UserListComponent from './pages/userlist'
import LoginComponent from './constants/others/login'
import LoginPage from './pages/loginpage'
import Sidebar from './constants/sidebar'
import DisplayHome from './constants/others/display'



const RouterComponent = () => {
  return (
    <>
      {/* <DisplayHome>
        <Sidebar />
      </DisplayHome> */}
    <Routes>
        <Route path="/" element={<LoginPage  />}/>
        <Route path="/motor" element={<MotorComponent />}/>
        <Route path="/caravan" element={<CaravanComponent />}/>
        <Route path="/tuning" element={<TuningComponent />}/>
        <Route path="/used-car" element={<UsedCarComponent />}/>
        <Route path="/camping-place" element={<CampingComponent />}/>
        <Route path="/user-list" element={<UserListComponent />}/>
        <Route path="/login" element={<LoginComponent  />}/>
    </Routes>
    
    </>
  )
}

export default RouterComponent;