import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/orders' element={<Orders />} ></Route>
      <Route path='/products' element={<Products />} ></Route>
     </Routes>
    </div>
  );
}

export default App;
