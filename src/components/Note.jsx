import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    return (
        <div className="note">
            <h1 className="title">
                {props.title}
            </h1>
            <p className="content">
                {props.text}
            </p>
            <button onClick={() => {props.delete(props.id)}}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;