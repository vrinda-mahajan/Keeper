import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
    const[isExpanded,setExpanded]=useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function handelChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        }
        )
    }
    function handelClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
    function expand(){
        setExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
            {isExpanded ? <input 
            onChange={handelChange} 
            name="title" 
            value={note.title} 
            placeholder="Title" />
            :null}
            <textarea 
                onClick={expand} 
                onChange={handelChange} 
                name="content" 
                value={note.content} 
                placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}><Fab onClick={handelClick}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;