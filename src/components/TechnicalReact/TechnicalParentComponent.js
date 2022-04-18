import React, { useState } from "react";
import '../../App.css';
import TechnicalChildComponent from './TechnicalChildComponent';

const TechnicalParentComponent = (props) => {


  const [data, setData] = useState({ dataString: "$$this is the data of the parent$$", paramInt: 99 });
  const sendDataToParentCallback = (data) => { 
    console.log(data);
    setData({ dataString:data, paramInt: 99 });
  };

  return (
    <React.Fragment>
    <h4>Component Comunication</h4>
    <div style={{ backgroundColor: 'green', borderRadius: "8px", minHeight: "5em", padding: "2em" }}>
      Im the parent component (GREEN), and I have the data the child component(BLUE) need. The data is " {data.dataString} "
      <TechnicalChildComponent data={data} sendDataToParent={sendDataToParentCallback}></TechnicalChildComponent>
    </div>
    </React.Fragment>

  );
}

export default TechnicalParentComponent;