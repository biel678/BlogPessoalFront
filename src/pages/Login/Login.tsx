import { useContext, useState, ChangeEvent, useEffect } from 'react';
import LoginLogo from '../../assets/cozy.jpeg'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../context/AuthContext';
import { RotatingLines } from 'react-loader-spinner';


function Login() {

    let navigate = useNavigate();

    const [UsuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...UsuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(UsuarioLogin)
    }


    return (
        <>
            <div className="bg-red-100 flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <form onSubmit={login}>
                        <div className="flex flex-col gap-4 items-center justify-center py-4 " >
                            <h2 className='text-4xl mb-5'>Faça o Login:</h2>
                            <form>
                                <label className='text-2xl mr-5'>Nome:</label>
                                <input type="text"
                                    id="usuario"
                                    name="usuario"
                                    placeholder="Usuario"
                                    className="border-2 border-slate-700 rounded p-2"
                                    value={UsuarioLogin.usuario}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                            </form>
                            <form>
                                <label className='text-2xl mr-5'>Senha:</label>
                                <input type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Senha"
                                    className="border-2 border-slate-700 rounded p-2"
                                    value={UsuarioLogin.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                            </form>
                            <div className="flex justify-around gap-4">
                                <button type='submit' className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 px-6 flex justify-center">
                                    {isLoading ? <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    /> :
                                        <span>Entrar</span>}
                                </button>
                            </div>
                            <div>
                                Se não tem login ainda clique em
                                <Link to='/cadastrar' className='hover:underline'> cadastre-se.</Link>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center ">
                        <img src={LoginLogo} alt="" className='' />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;