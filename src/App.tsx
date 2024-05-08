import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import { AuthProvider } from './context/AuthContext';
import ListaTemas from './components/Temas/ListaTemas';
import FormularioTema from './components/Temas/FormularioTema';
import DeletarTema from './components/Temas/DeletarTema';
import ListaPostagens from './components/postagens/ListaPostagens';
import FormularioPostagem from './components/postagens/FormularioPostagem';
import DeletarPostagem from './components/postagens/DeletarPostagem';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastroTema" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;