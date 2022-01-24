import * as React from 'react';
import logo from '../logo.svg';
import ListElement from './ListElement';

var datosGames= [{title:"title",description:"info",link:"www.google.es",linkText:"Enlace"},{title:"title2",info:"info2"}];
console.log(datosGames);

const elementsArrayGames= datosGames.map((item,pos)=>{
    return (
      <ListElement title={item.title} description={item.description} link={item.link} linkText={item.linkText}></ListElement>
    )
})
console.log(elementsArrayGames);


export default function Collapsible() {
    return (
        <div style={{margin:"1em", backgroundColor:"#1E6167"}}>
            <ul className="collapsible" style={{  borderColor:"#282C34"}}>
                <li className="active">
                    <div className="collapsible-header" style={{ backgroundColor:"#224E54",borderColor:"#282C34"}}><i className="material-icons">book</i>Proyects</div>
                    <div className="collapsible-body">  <ListElement title="TEST2"></ListElement></div>
                </li>
                <li >
                    <div className="collapsible-header" style={{ backgroundColor:"#224E54",borderColor:"#282C34"}}><i className="material-icons">videogame_asset</i>Games</div>
                    <div className="collapsible-body"> {elementsArrayGames}</div>
                </li>
                <li>
                    <div className="collapsible-header" style={{ backgroundColor:"#224E54",borderColor:"#282C34"}}><i className="material-icons">grade</i>Others</div>
                    <div className="collapsible-body">  <ListElement title="TEST2"></ListElement></div>
                </li>
            </ul>
        </div>)
};