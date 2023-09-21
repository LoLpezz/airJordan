import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Cards from "./componentes/Cards";
import Footer from "./componentes/Rodape/Footer";
import './index.css'
import './reset.css'


function App() {

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Cards alt="Imagen do tênis Air Jordan"></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;