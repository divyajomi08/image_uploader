import React,{useState} from "react";
import axios from "axios";

const Image_component = () => {
  const [selectedfile,setfile]=useState(null);
  const [identifier,setid]=useState(null);
  const onFileChange = event => {     
    // Update the state 
    setfile({ selectedfile: event.target.files[0] });   
  }; 
  const onTextChange = (event)=>{
    setid(event.target.value);
  };
  const onFileUpload = () => {      
    // Create an object of formData 
    // const formData = new FormData(); 
   
    // Update the formData object 
    // formData.append(      
    //   selectedfile, 
    //   selectedfile.name 
    // ); 
    const formData = {image : selectedfile,identifier : identifier }; 
    // Details of the uploaded file 
    console.log(selectedfile); 
   
    // Request made to the backend api 
    // Send formData object 
    axios.post("https://stormy-dawn-26142.herokuapp.com/images", formData); 
  }; 
  
  
  return (
    <div>
      <form className="ui form" >
        <h1 className="ui dividing header">Image Recognizer</h1>
        <div className="field">
          <div className="ui raised segment">
            <a className="ui teal ribbon label">Drop Your Images Here</a>
            <div className="ui input">
              <br></br>
              <input name="image" onChange={onFileChange} type="file" />
            </div>
            <div className="field">
              <label>Name</label>
              <input name="identifier" onChange={onTextChange} type="text" placeholder="name" />
            </div>
            <button className="ui green button" onClick={()=>{onFileUpload()}} >Upload</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Image_component;