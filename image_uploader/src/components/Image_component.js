import React from "react";

const Image_component = () => {

    return(
    <div  style={{background: "#003333",width: '100%',height: '100%' }}>
        <form >
            <h1 className="ui center aligned icon header" style={{ color: "white",marginTop: "12%" }}>Recognize anything, from anywhere.</h1>
            <h4 className="ui center aligned icon header" style={{ color: "white" }}>Upload your images here to get the image recognized.</h4>
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