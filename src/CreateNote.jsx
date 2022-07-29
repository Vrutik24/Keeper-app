import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function CreateNote(props)
{
    return <div className="notes">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="deleteButton" onClick={()=>{
            props.handleClick(props.id)
        }}><DeleteIcon/></button>
    </div>
}

export default CreateNote;