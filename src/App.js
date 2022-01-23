import logo from './logo.svg';
import './App.css';


import HeaderPage from './HeaderPage';
import ListElement from './ListElement';

function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}
/*function App() {
  var texto=" Bienvenido a mi pagina web..."
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {texto}
        </p>
      </header>
    </div>
  );
}*/

function App(){

  return (
    <><HeaderPage /><div className="App">
      <header className="App-header">
        <h3>Bienvenido a mi pagina web</h3>
        <ListElement title="TEST"></ListElement>
        <ListElement title="TEST2"></ListElement>

      </header>
    </div></>
    );  
  
}

export default App;
