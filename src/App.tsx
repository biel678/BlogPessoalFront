import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import { AuthProvider } from './context/AuthContext';

function App() {
  return ( 
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;