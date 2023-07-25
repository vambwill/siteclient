import './App.css';
import Nave from './components/Nave';
import Main from './components/Main';
import Footer from './components/Footer';
import styles from './components/Modulo.alinBody.css';


function App() {
  
  const nome = "Beto";

  return (
    <div >
      
      <Nave />
      <hr></hr>
      <Main />
      <Footer 
      email="nome.da.firma@gmail.com"
      address="Rua da firma, Cidade, 0000"
      phone="Ligue: 99999-9999"
      />
    </div>
    
    
    
    
  );
}

export default App;
