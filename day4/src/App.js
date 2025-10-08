import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login/>} /> 
          <Route path='/signup' element={<Signup/>} />
          <Route path='/homepage' element={<Homepage/>} />
        </Routes>
    </div>
  );
}

export default App;
