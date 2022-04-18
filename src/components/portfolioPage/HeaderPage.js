import * as React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

const HeaderPage = () => {
   

    addRemoveListener();

    function addRemoveListener() {
      console.log("setting event listener");
      document.removeEventListener('event1', callbackFunction)
      document.addEventListener('event1', callbackFunction)
    }
    
    function callbackFunction(data){
      data.stopImmediatePropagation();
      console.log(data);
      alert('A independient component has recieved the information using a event listener at' +data.detail);
    }

  return (
    <nav style={{height:"10em",backgroundColor:"#263A41"}}>
      <div className="nav-wrapper" >
        <img src={logo} className="brand-logo App-logo right disableInMobile"  style={{overflow:"hidden", margin:"1em"}}  alt="logo" />
        <h3 style={{margin:"0px",paddingTop:"1em",paddingLeft:"0.5em"}}>Alex React Website</h3>
        <div style={{color:"grey",marginLeft:"1em"}}>Made with React 17 and MaterializeCSS</div>

      </div>
  </nav>

  );
}
export default HeaderPage;