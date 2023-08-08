import logo from './logo.svg';
import './App.css';
//add imports for BrowserRouter,Routes and Route
import {BrowserRouter,Routes,Route}
from 'react-router-dom';
//imports for login and about pages
import Login from './components/login';
import About from './components/about';
function App() {
  return (
  //generate routing for about and login pages using BrowserRoute,Routes and Route
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />}
        />
        <Route path="/login" element={<Login />}
        />
        
        </Routes>
        </BrowserRouter>
     
  
  );
}

export default App;
