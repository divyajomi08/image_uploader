import React from 'react';
import ReactDOM from 'react-dom';
import Image_component from './components/Image_component';
import Image_get from './components/Image_get';
import Show_image from './components/Show_image';

const App = () => {

  return (
    <div className="ui container">
      <br/><br/>
      <Image_component/>
      <Image_get/>
      <Show_image/>
    </div>
  );
};
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
