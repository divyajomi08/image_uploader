import React from 'react';
import ReactDOM from 'react-dom';
import Image_component from './components/Image_component';

// 7DBFAB
const App = ()=>{
  return(<div  style={{background: "#003333",width: '100%',height: '100%' }}> <Image_component></Image_component></div>);
};
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
