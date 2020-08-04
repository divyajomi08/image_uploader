import React from 'react';
import ReactDOM from 'react-dom';
import Image_component from './components/Image_component';

const App = ()=>{
  return(<div className = "ui container"> <Image_component></Image_component></div>);
};
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
