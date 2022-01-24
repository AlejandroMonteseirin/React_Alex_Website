import * as React from 'react';
import classes from '../css/PageCss.module.css'

const ListElement = (properties)=>{

    return (
    <div className={classes.cardcss}>
        <h4>{properties.title}</h4>
        <p>{properties.description}</p>
        <a style={{color:"blue"}} href ={properties.link}> {properties.linkText}</a>
    </div>
    )


}
export default ListElement;