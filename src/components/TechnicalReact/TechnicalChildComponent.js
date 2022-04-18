import React, {  useState } from "react";
import '../../App.css';

const TechnicalChildComponent = (props,sendDataToParent) => {

  //  const [data, setCount] = useState({dataString:"$$this is the data of the child$$", paramInt:99});


  return (
   
    <div style={{backgroundColor:'blue', borderRadius:"8px", minHeight:"5em", padding:"2em"}} >
        Im the child component(BLUE), and I use the data the parent component have. The data is " {props.data.dataString} " and is shared via props
        <br></br>
        <button
            onClick={() => {
              var today = new Date();
              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              props.sendDataToParent("New Data in the parent, sended by the child at "+time);
            }}
            
            style={{ fontWeight: "bold" }}
          >Push me to send new data to the parent Component</button>
           <button
            onClick={() => {
              var today = new Date();
              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              console.log("sended event");
              var e=new CustomEvent("event1", { detail: time })
              document.dispatchEvent(e);

            }}
            
            style={{ fontWeight: "bold" }}
          >Push me to send new data to a independient component using events</button>
    </div>

  );
}
export default TechnicalChildComponent;