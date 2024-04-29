
import './Home.css';

function Manutencao(){
    alert("Site em manutenção, em breve novas funcionalidades")
}

function Home() {
    return (

        <div className=''>
            <div className='font-bold text-center text-4xl'>
                Bem vinde ao Confy Blog!
            </div>

            <div className='text-center text-4xl mt-4 mb-5'>
                Escolha o que você deseja fazer:
            </div>
            <div className='grid grid-cols-12 text-xl'>
                <div className='col-span-4 text-center'>
                    <h1 className='text-2xl'>Criar:</h1>
                    <button className='border-4  border-black m-5'> Fazer postagem</button>
                </div>
                <div className='col-span-4 text-center'>
                    <h1 className='text-2xl'>Relaxar:</h1>
                    <button className='border-4  border-black m-5'> Fazer postagem</button>
                </div>
                <div className='col-span-4 text-center'>
                    <h1 className='text-2xl'>Procurar:</h1>
                    <button className='border-4  border-black m-5'> Fazer postagem</button>
                </div>
            </div>
        </div>
    );
}


export default Home;