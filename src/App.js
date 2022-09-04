import {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Orders from './components/Orders';
import Products from './components/Products';
import DashboardContent from './components/DashboardContent';
import UserProfile from './components/UserProfile';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(location.pathname)

    if(!isLoggedIn && location.pathname !== '/')
    {
      navigate('/');
    }
  }, [location]);

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} ></Route> 
      

      <Route path='/dashboard' element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} >
       <Route index element={<DashboardContent   />}></Route>
       <Route path='/dashboard/orders' element={<Orders />} ></Route>
       <Route path='/dashboard/products' element={<Products />} ></Route>
       <Route path='/dashboard/profile' element={<UserProfile />}></Route>
      </Route>

     </Routes>
    </div>
  );
}

export default App;
