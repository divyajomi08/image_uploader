import React, { useState } from "react";
import axios from "axios";

const Image_component = () => {
  const [selectedFile, setFile] = useState(null);
  const [identifier, setId] = useState(null);
  const [uploaded, setUpload] = useState(null);

  const onFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const onTextChange = (event) => {
    setId(event.target.value);
  };

  const onFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("identifier", identifier);
    axios
      .post(" https://stormy-dawn-26142.herokuapp.com/images", formData, {
        headers: {
          "Content-Type": "multipart/formdata",
        },
      })
      .then((res) => setUpload(true))
      .catch((err) => {
        console.log(err.response);
        setUpload(null);
      });
  };
  return (
    <div>
      <form className="ui form">
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
              <input
                name="identifier"
                onChange={onTextChange}
                type="text"
                placeholder="name"
              />
            </div>
            <button className="ui green button" onClick={onFileUpload}>
              Upload
            </button>
            <button className="ui green button" type="submit">
              Refresh
            </button>
            <div>
              <br></br>
              {uploaded ? 
                 <h4 className="ui dividing header">Uploaded</h4>
               : null}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Image_component;