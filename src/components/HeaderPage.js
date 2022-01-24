import * as React from 'react';
import logo from '../logo.svg';
import '../App.css';

export default function HeaderPage() {
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
