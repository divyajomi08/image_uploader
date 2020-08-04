import React from "react";

const Image_component = () => {

    return(
        <div>
          <form className="ui form">
            <h1 className="ui dividing header">Image Recognizer</h1>
            <div className="field">
              <div class="ui raised segment">
                <a class="ui teal ribbon label">Drop Your Images Here</a>
                <div className="ui action input">
                  <br></br>
                  <input type="file" />
                  <button className="ui green button">Upload</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    };
export default Image_component;