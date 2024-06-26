import homeLogo from '../../assets/home.jpeg'
import ListaPostagens from '../../components/postagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/ModalPostagem';
import './Home.css';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="bg-indigo-300 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Esse é o melhor local para ficar tranquilo e falar do que gosta.</p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                            <Link to='/postagens' className='rounded bg-white text-blue-800 py-2 px-4 hover:underline'>Postagens</Link>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home;