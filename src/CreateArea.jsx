import React from "react";

function CreateArea(props)
{
    return <div>
        <form>
            <div className="title">
                <input
                    name="title"
                    placeholder="Title"
                    onChange={props.handleChange}
                    value={props.title}
                />
            </div>
            <div className="description">
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows='3'
                    onChange={props.handleChange}
                    value={props.content}
                />
            </div>
            <button className="addButton" onClick={props.handleClick}>Add</button>
        </form>
    </div>
}

export default CreateArea;