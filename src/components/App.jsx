import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateInputTextArea from "./CreateInputTextArea";
import { useState } from "react";


function App() {

    const[noteItemArray, setNoteItemArray] = useState([]);

    function onAdd(noteText, setNoteText) {
        setNoteItemArray((prevItems) => {
            return[...prevItems, noteText];
        })
        setNoteText(() => {
            return {
                title:"",
                content:""
            }
        })
    }

    function deleteNote(id) {
        setNoteItemArray((prevItems) => {
            return prevItems.filter((value,items) => {
                return items !== id; 
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateInputTextArea
                addNote={onAdd}
            / >
            {noteItemArray.map((noteItem, itemIndex) => {
                return <Note key={itemIndex} id={itemIndex} delete={deleteNote} title={noteItem.title} text={noteItem.content} />
            })} 
            <Footer />  
        </div>
    )
}


export default App;
// export {HeadingSection, FooterSection, NoteSection};