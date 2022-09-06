import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Schedule from "./pages/schedule/Schedule";
import Farm from "./pages/farm/Farm";
import Delete from "./pages/delete/Delete";
import Notifications from "./pages/notifications/Notifications";
import Knowledge from "./pages/knowledge/Knowledge";
import Crops from "./pages/crops/Crops";
import Grains from "./pages/grains/Grains";
import Tubers from "./pages/tubers/Tubers";
import Vegetables from "./pages/vegetables/Vegetables";
import Activity from "./pages/activity/Activity"
import Charts from "./pages/charts/Charts"
import Profile from "./pages/profile/Profile";
import Addcrops from "./pages/addcrops/Addcrops"
import Cropscont from "./pages/cropscont/Cropscont";
import Users from "./pages/users/Users";
import Dashboard from "./pages/dashbaord/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DeleteModal from "./components/DeleteModal";
import Notification from "./components/notification/Notification";



function App() {
  return ( 
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />



        <Route element={<ProtectedRoutes />}>
          <Route path="/">
          <Route path="/*" element={ <Dashboard /> }/>
            <Route path="notification" element={ <Notification /> }/>
            <Route path="knowledge" element={ <Knowledge /> }/>
            <Route path="crops" element={ <Crops /> }/>
            <Route path="users" element={ <Users /> }/>
            <Route path="profile" element={ <Profile /> } />
          </Route>
          <Route path="users">
            <Route path=":personalinfo" element={ <Single /> }/>
            <Route path="activity" element={ <Activity /> }/>
            <Route path="analytics" element={ <Charts /> }/>
          </Route>
        </Route>

        <Route>
        </Route> 

        <Route path="crops">
          <Route path="crops" element={ <Crops /> }/>
          <Route path="grains" element={ <Grains /> }/>
          <Route path="tubers" element={ <Tubers /> }/>
          <Route path="vegetables" element={ <Vegetables /> } />
          <Route path="addcrops" element={ <Addcrops/> } />
        </Route>
        <Route path="knowledge">
          <Route path="create" element={ <Cropscont /> }/>
        </Route>

          <Route path="new" element={ <New /> }/>
          <Route path="schedule" element={ <Schedule /> }/>
          <Route path="farm" element={ <Farm /> }/>
          <Route path="delete" element={ <Delete /> }/>
          
          <Route path="notifications" element={ <Notifications /> }/>
          <Route path="grains" element={ <Grains /> }/>
          <Route path="tubers" element={ <Tubers /> }/>
          <Route path="vegetables" element={ <Vegetables /> }/>
        <Route paths="crops">
          <Route path="grains" element={ <Grains/> }></Route>
        </Route>
        <Route path="products">
          
          <Route path="new" element={ <New /> }/>
          <Route path="delete" element = { <DeleteModal /> } />
        </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
