import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Dashboard />}></Route>
     </Routes>
    </div>
  );
}

export default App;
