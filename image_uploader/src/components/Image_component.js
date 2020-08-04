import React from "react";

const Image_component = () => {

    return(
    <div>
        <form style={{marginTop: "15%"  }}>
            <h1 className="ui center aligned icon header" style={{ color: "white" }}>Image Recognizer</h1>
            <h2 className="ui center aligned icon header" style={{ color: "white" }}>Drop Your Images Here</h2>
            <div className="ui center aligned basic segment">
                <div className="ui big icon input" style={{ padding: "10px", border: "3px solid white" }}>
                    <input type="file" />
                    <button className="ui button">Upload</button>
                </div>
            </div>   
        </form>
    </div>
    );
};
export default Image_component;