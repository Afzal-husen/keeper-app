import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateInputTextArea(props){

    const[isExpanded, setIsExpanded] = useState(false);

    

   const[noteText, setNoteText] = useState({
    title:"",
    content:""
   })


    function handleChange(event) {
    
        const{value, name} = event.target;

        setNoteText((prevValue) => {
            return{
                ...prevValue,
                [name]: value
            }
        })
    }

    function dontSubmit(event) {
        event.preventDefault();
    }

    function mouseOver() {
        document.getElementById("btn").style.background = "rgb(204 202 195)";
    }

    function mouseOut() {
        document.getElementById("btn").style.background = "#f5ba13"
    }

    function handleExpand() {
        setIsExpanded(true);
    }

    return(
        <div>
            <form className="create-note" onSubmit={dontSubmit} action="">
                {isExpanded && <input
                    onChange={handleChange}
                    value={noteText.title} 
                    name="title"  type="text"
                    className="text"
                    placeholder="Title"/>}
                
                <textarea
                    onClick={handleExpand}
                    onChange={handleChange}
                    value={noteText.content}
                    name="content"
                    rows={isExpanded? "3" : "1" }
                    placeholder="Take a note...">
                </textarea>
                <Zoom in={isExpanded? true : null}>
                    <Fab id="btn" onMouseOver={mouseOver} onMouseOut={mouseOut} type="submit" onClick={() => {props.addNote(noteText, setNoteText)}}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateInputTextArea;
