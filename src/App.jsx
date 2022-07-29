import React, { useState } from "react";
import CreateArea from "./CreateArea";
import CreateNote from "./CreateNote";

function App()
{
    const [note, setNote] = useState({
        title: '',
        content : ''
    });

    const [arrayNote, setArrayNote] = useState([]);

    function handleChange(event)
    {
        const {name, value} = event.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

    function addNote(event)
    {
        setArrayNote(prevNotes=>{
            return [...prevNotes, note];
        });
        setNote({
            title : '',
            content : ''
        });
        event.preventDefault();
    }

    function deleteNote(id)
    {
        setArrayNote(prevNotes =>{
            return prevNotes.filter((note, index)=>{
                return index!=id;
            })
        });
    }


    return <div>

        <div className="heading">
            <h1><i>Keeper App</i></h1>
        </div>

        <div className="userInput">
            <div id="input">
                <CreateArea handleChange = {handleChange} handleClick = {addNote} title = {note.title} content = {note.content}/>
            </div>
        </div>

        <div >
            <div>
                
                    {arrayNote.map((note, index) =>(
                        <CreateNote key = {index} id = {index}  title = {note.title} content = {note.content} handleClick = {deleteNote}/>
                    ))}   
                
            </div>
        </div>


    </div>
}

export default App;