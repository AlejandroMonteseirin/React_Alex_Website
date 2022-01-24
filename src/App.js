import './App.css';


import HeaderPage from './components/HeaderPage';
import M from 'materialize-css';
import Collapsible from './components/Collapsible';


function App() {
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var options = null;
    M.Collapsible.init(elems, options);
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
