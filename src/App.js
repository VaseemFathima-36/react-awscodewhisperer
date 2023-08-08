import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/about';
import Login from './components/login';
function App() {
  return (
  //create routing for about page
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>}
        />
        <Route path="/login" element={<Login/>}
        />

      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
