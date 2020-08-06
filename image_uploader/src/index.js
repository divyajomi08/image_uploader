import React from 'react';
import ReactDOM from 'react-dom';
import Image_component from './components/Image_component';
import Image_get from './components/Image_get';


const App = () => {

  return (
    <div className="ui container">
      <br/><br/>
      <Image_component/>
      <Image_get/>
      
    </div>
  );
};
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
