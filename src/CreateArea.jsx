import React, { useState } from "react";

function CreateArea(props) {
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
    return (
        <div>
            <form>
                <input onChange={handelChange} name="title" value={note.title} placeholder="Title" />
                <textarea onChange={handelChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={handelClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;