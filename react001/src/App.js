import Componente1 from './componentes/componente1';
import Componente2 from './componentes/componente2';
import Componente3 from './componentes/componente3';
import Componente4 from './componentes/componente4';
import Ex1 from './componentes/exFunc1';
import Ex2 from './componentes/exFunc2';
import Ex3 from './componentes/exFunc3';
import Ex4 from './componentes/exFunc4';

function App() {
    return (
        <div>
            <h1>Olá, React!</h1>
            <p>Gostei do React!</p>
        <hr></hr>
            <Componente1 />
            <Componente2 />
            <Componente3 />
            <Componente4 texto="Que fase ta o curintia :c"/>
        <hr></hr>
            <Ex1 />
            <Ex2 />
            <Ex3 />
            <Ex4 texto="Palmeiras nao tem mundial"/>
        </div>
    )
}
export default App