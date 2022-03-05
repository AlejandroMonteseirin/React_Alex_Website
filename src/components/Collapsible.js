import * as React from 'react';
import ListElement from './ListElement';
import ssrl from '../images/ssrl.png';
import pokemon from '../images/pokemon.PNG';
import github from '../images/GitHub.png';

var datosGames= [
    {title:"SpaceShip Roguelike",fecha:"2022" ,description:"Juego profesional para Android de naves, estilo rogueLike en el que juegas partidas cortas y freneticas. Desplegado en la play store, conectado a la api de google play juegos y monetizado mediante Admob (anuncios)",link:"https://play.google.com/store/apps/details?id=org.godotengine.spaceRogueLikeASB",linkText:"Enlace a la play Store",image:ssrl},
    {title:"Epic Chili Android",fecha:"2017" ,description:"Juego RPG completo de historia Sevillana para Android, basado en RPG Maker",link:"https://drive.google.com/file/d/1iAv-6_dE43gAGHwUR8VGJkFmSaegtCW5/view",linkText:"Enlace a la descarga"},
    {title:"Pokemon Sin nombre oficial aun :) ",fecha:"2016",description:"Demo Juego de PC no profesional de Pokemon totalmente customizado, basado en RPG maker muy scripteado",link:"https://mega.nz/folder/IRowUBqa#8v-5B5G-BYJv9DL65b5JNg",linkText:"Enlace a la descarga",image:pokemon},
    {title:"Sueco el sueco",fecha:"2012",description:"Prototipo RPG basico",link:"https://mega.nz/file/UZRmnTxJ#xqYLlOcM-kG4Q0KPpOyz6A5iIFOeu9qDIEiJ6MSQZv0",linkText:"Enlace a la descarga"}




];

const elementsArrayGames= datosGames.map((item,pos)=>{
    return (
      <ListElement key={item.title} title={item.title} description={item.description} link={item.link} linkText={item.linkText} image={item.image} fecha={item.fecha}></ListElement>
    )
})

var datosProyectos= [
    {title:"React Website",fecha:"2022",description:"Literalmente esta pagina, hecha con objetivos formativos siguiendo el curso react-js-a-complete-guide-for-frontend-web-development de Udemy, react + materialicecss, desplegada en firebase",link:"https://github.com/AlejandroMonteseirin/React_Alex_Website",linkText:"Enlace a github",image:github},
    {title:"Angular Testing Karma Jasmine",fecha:"2021",description:"Prototipo de repositorio de una aplicación Angular11+ con Test Automatizados utilizando Karma Jasmine",link:"https://github.com/AlejandroMonteseirin/Angular_Testing_Karma_Jasmine",linkText:"Enlace a github",image:github},
    {title:"Plantilla Angular",fecha:"2020-2022" ,description:"Proyecto plantilla de Angular 10+ con los componentes NgPrime, ngx-translate y otros preparados. Utilizado para agilizar la creación de un nuevo proyecto Angular",link:"https://github.com/AlejandroMonteseirin/ProyectoPlantillaAngular10NgPrime",linkText:"Enlace a github",image:github},
    {title:"Backend Node.js",fecha:"2020",description:"Prototipo de Backend basado en Node.js, siguiendo el curso Curso de node.js en Platzi.com",link:"https://github.com/AlejandroMonteseirin/Backend-Node.js",linkText:"Enlace a github",image:github},
    {title:"Django Pagina Personal",fecha:"2020",description:"Pagina web en basada en Django, conectada a una base de datos Postgresql y desplegada mediante Heroku",link:"https://github.com/AlejandroMonteseirin/Django_Personal_Web",linkText:"Enlace a github",image:github},
    {title:".NetCore Web Api",fecha:"2020",description:"Proyecto de carácter formativo, en el cual se desarrolla una Api rest basada en ASP NET CORE, implementando JWT(JSON Web Token), las migraciones utilizando el entity framework y las operaciones bás…",link:"https://github.com/AlejandroMonteseirin/.net_core_Web_api",linkText:"Enlace a github",image:github},
    {title:"Test Pokemon",fecha:"2020",description:"Pagina parodia de un test de personalidad pokemon, Angular + Firebase",link:"https://github.com/AlejandroMonteseirin/TestPokemon.com",linkText:"Enlace a github",image:github},




];

const elementsArrayProyectos= datosProyectos.map((item,pos)=>{
    return (
      <ListElement key={item.title} title={item.title} description={item.description} link={item.link} linkText={item.linkText} image={item.image} fecha={item.fecha} isGithub="true"></ListElement>
    )
})
console.log(elementsArrayGames);


export default function Collapsible() {
    return (
        <div style={{margin:"1em", backgroundColor:"#1E6167"}}>
            <ul className="collapsible" style={{  borderColor:"#282C34"}}>
                <li className="active">
                    <div className="collapsible-header" style={{ backgroundColor:"#224E54",borderColor:"#282C34"}}><i className="material-icons">book</i>Proyects</div>
                    <div className="collapsible-body"> {elementsArrayProyectos}</div>
                </li>
                <li >
                    <div className="collapsible-header" style={{ backgroundColor:"#224E54",borderColor:"#282C34"}}><i className="material-icons">videogame_asset</i>Games</div>
                    <div className="collapsible-body"> {elementsArrayGames}</div>
                </li>
                <li>
                    <div className="collapsible-header" style={{ backgroundColor:"#224E54",borderColor:"#282C34"}}><i className="material-icons">grade</i>Others</div>
                    <div className="collapsible-body"> Aqui no hay nada aún... </div>
                </li>
                
            </ul>
        </div>)
};