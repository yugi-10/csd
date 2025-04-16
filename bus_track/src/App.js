import React ,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notification from './components/js_files/Notification';
import NavigationBar from './components/js_files/NavigationBar';
import Homepage from './components/js_files/Homepage';
import Track from './components/js_files/Track';
// import Alert from './components/js_files/Alert';
import Login from './components/js_files/Login';
import Register from './components/js_files/Register';
import Aboutus from './components/js_files/Aboutus';
import Profile from './components/js_files/Profile';
import UserContext from './components/js_files/UserContext';
import './App.css';
// mport './components/css_files/Homepage.css';
// import './components/css_files/NavigationBar.css';
// import './components/css_files/Login.css';
// import { useNavigate } from 'react';
const App = () => {
  const [user,setUser] = useState(null);
  return (
    <UserContext.Provider value = {{user,setUser}}>
  <div className="App">
    <Router>

    <NavigationBar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<div className="background-image">  <Homepage /> </div>} />
          <Route path="/track" element={<Track />} />
          <Route path="/notification" element={<Notification />} />
          {/* <Route path="/alert" element={< Alert />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
        
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
    </Router>
  </div>
  </UserContext.Provider>
  );
};
export default App;
// const App = () => {
//   return (
//   <div className="App">
//     {/* <div className="background-image"> 
//         <Homepage /> 
//     </div> */}
//   export const UserContext = createContext();
//   const R
//   return(
//     <UserContext.Provider>
//     <NavigationBar/>
//     <Router>
//         <Routes>
//           <Route path="/" element={<div className="background-image">  <Homepage /> </div>} />
//           <Route path="/track" element={<Track />} />
//           <Route path="/notification" element={<Notification />} />
//           <Route path="/alert" element={< Alert />} />
//           <Route path="/profile" elementt={<Profile />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/signup" element={<Register />} />
//         </Routes>
//     </Router>
//     </UserContext.Provider>
//   )
//   </div>
//   );
// };
