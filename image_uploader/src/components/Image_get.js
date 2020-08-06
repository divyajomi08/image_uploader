import React, { useState, useEffect } from "react";
import axios from "axios";

const Image_get = () => {
    const [path_object,setPathObj]=useState(null);
    const [path, setPath] = useState(null);
    const [identifier, setId] = useState(null);
    const getPath = async () => {
        const result = await axios.get("https://stormy-dawn-26142.herokuapp.com/images");
        setPath(result.data);
        
    };
    const onButtonClick = async(event) => {
        event.preventDefault();
        setPathObj(path.filter((element) => {return element.identifier === identifier; }));

    };
    const onTextChange = (event) => {
        setId(event.target.value);
        
    };

    useEffect(() => { getPath() }, [identifier]);    
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <div className="ui raised segment">

                        <label>Name</label>
                        <input
                            name="identifier"
                            onChange={onTextChange}
                            type="text"
                            placeholder="name"
                        />
                        <button className="ui labeled icon button" onClick={onButtonClick}>
                            <i className="eye icon"></i>Preview

                        </button>
                        {path_object ? <div className="ui card">
                            <div className="image">
                                {path_object[0] ? <img src={"https://stormy-dawn-26142.herokuapp.com/"+path_object[0].pathName} /> : null}
                            </div>
                        </div> : null}
                        <button className="positive ui button" >

                            Next
                        </button><br></br>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Image_get;