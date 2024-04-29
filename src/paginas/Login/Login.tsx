import LoginLogo from '../../assets/cozy.jpeg'
function Login() {
    return (
        <>
            <div className="bg-red-100 flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-4xl mb-5'>Faça o Login:</h2>
                        <form>
                        <label className='text-2xl mr-5'>Nome:</label>
                        <input/>
                        </form>
                        <form>
                        <label className='text-2xl mr-5'>Senha:</label>
                        <input/>
                        </form>
                        <div className="flex justify-around gap-4">
                        <button className='rounded bg-white text-blue-800 py-2 px-4'>Logar</button>
                        </div>
                        <div>
                            Se não tem login ainda clique em cadastre-se.
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={LoginLogo} alt="" className='w-8/10' />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;