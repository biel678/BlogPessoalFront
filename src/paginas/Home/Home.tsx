import homeLogo from '../../assets/home.jpeg'
import './Home.css';

// function Home() {
//     return (

//         <div className=''>
//             <div className='font-bold text-center text-4xl'>
//                 Bem vinde ao Confy Blog!
//             </div>

//             <div className='text-center text-4xl mt-4 mb-5'>
//                 Escolha o que você deseja fazer:
//             </div>
//             <div className='grid grid-cols-12 text-xl'>
//                 <div className='col-span-4 text-center'>
//                     <h1 className='text-2xl'>Criar:</h1>
//                     <button className='border-4  border-black m-5'> Fazer postagem</button>
//                 </div>
//                 <div className='col-span-4 text-center'>
//                     <h1 className='text-2xl'>Relaxar:</h1>
//                     <button className='border-4  border-black m-5'> Fazer postagem</button>
//                 </div>
//                 <div className='col-span-4 text-center'>
//                     <h1 className='text-2xl'>Procurar:</h1>
//                     <button className='border-4  border-black m-5'> Fazer postagem</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;