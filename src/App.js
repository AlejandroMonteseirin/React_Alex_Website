import './App.css';


import HeaderPage from './components/HeaderPage';
import M from 'materialize-css';
import Collapsible from './components/Collapsible';
function timeout(delay) {
  return new Promise(res => setTimeout(res, delay));
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

function App() {
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var options = null;
    var instances = M.Collapsible.init(elems, options);
  });
  return (

    <>    <div className="App">

      <HeaderPage />
      <div style={{height:"3em"}}></div>
      <Collapsible />

    </div></>
  );

}

export default App;
