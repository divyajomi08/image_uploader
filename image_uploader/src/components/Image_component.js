import React,{useState} from "react";
import axios from "axios";

const Image_component = () => {
  const [selectedfile,setfile]=useState(null);
  const [identifier,setid]=useState(null);

  const onFileChange = event => {
    console.log(event.target.files[0])
    setfile(event.target.files[0]);
  };

  const onTextChange = event =>{
    setid(event.target.value);
  };

  const onFileUpload = (event) => {
    console.log(selectedfile);
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      "image",
      selectedfile
    );
    formData.append(
      "identifier",
      identifier
    );
    axios.post("https://stormy-dawn-26142.herokuapp.com/images", formData, {
      headers: {
        'Content-Type': "multipart/formdata",
      }
    }).catch((err)=>{
      console.log(err.response);
    });
   
  };
  return (
    <div>
      <form className = "ui form" >
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
            <button className="ui green button" onClick={onFileUpload} >Upload</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Image_component;