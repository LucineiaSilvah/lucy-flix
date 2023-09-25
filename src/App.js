import './reset.css'
import './app.css'
import Header from "./components/Header";
import Banner from './components/Banner';
import Carrossel from './components/PastaCarrossel/Carrossel';
import Footer from './components/Footer';






function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Carrossel/>
      <Footer/>
    </div>
  );
}

export default App;
