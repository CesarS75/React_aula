import Texto from "./components/texto";
import Cesar from "./components/cesar";
import Caixa from "./components/caixa";
import Comandos from "./components/comandos";
import imagem2 from "../src/gatolinguarudo.jpg"
import manco from "../src/manco.jpg"
import medo from "../src/medo.jpg"
import banho from "../src/gatobanho.jpg"
function App(){
    return (
        <div className="img">
            <div>
                <img src={banho} alt="gato banhando" width="200"></img>
                <img src={imagem2} alt="gato linguarudo" width="200"></img>
                <img src={manco} alt="gato manco" width={200}></img>
                <img src={medo} alt="gato com medo" width={200} height={200}></img>
            </div>
        </div>
    )
}
export default App