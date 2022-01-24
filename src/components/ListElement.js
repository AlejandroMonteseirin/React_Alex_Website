import * as React from 'react';

const ListElement = (properties) => {

    var imagen=<div className="card-title" ><div style={{padding:"1em",fontSize:"larguer",fontWeight:"bolder"}}>{properties.title} </div></div>;
    if (properties.image!=null && properties.isGithub){
        imagen= <div className="card-image"><img  alt={properties.title} style={{width:"20%",paddingTop:"1em"}} src={properties.image}/><span className="card-title" style={{position:"inherit",paddingTop:"1em",fontSize:"larguer",fontWeight:"bolder"}}>{properties.title}</span></div> 

    }else if(properties.image!=null){
        imagen= <div className="card-image"><img alt={properties.title} src={properties.image}/><span className="card-title" style={{position:"inherit",paddingTop:"1em",fontSize:"larguer",fontWeight:"bolder"}}>{properties.title}</span></div> 

    }
    return (

        <div  className="card" style={{ backgroundColor: "#14969A", marginBottom:"3em" }}>
            {imagen}
            <div className="card-content">
            <div style={{color:"red", fontWeight:"bold",fontFamily:"cursive",fontSize:"large"}}>{properties.fecha}</div>

                <p>{properties.description}</p>
            </div>
            <div className="card-action">
                <a href={properties.link}>{properties.linkText}</a>
            </div>
        </div>


    )
    /*
    <div className={classes.cardcss}>
            <h4>{properties.title}</h4>
            <p>{properties.description}</p>
            <a style={{color:"blue"}} href ={properties.link}> {properties.linkText}</a>
        </div>*/

}
export default ListElement;