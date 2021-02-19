import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Componente = ({ children }) => {
  //Size of children
  const divTag = useRef();
  useEffect(()=>{
    console.log(children.props.style);
    console.log(divTag.current.getBoundingClientRect());
  }, [ children ]);

  return <div ref={ divTag } >{ children }</div>
}


ReactDOM.render(
  <React.StrictMode>
    <Componente>
      <div style={{ width:'200px', height: '200px' }}>
        <h1>Size Me!</h1>
      </div>
    </Componente>    
  </React.StrictMode>,
  document.getElementById('root')
);
