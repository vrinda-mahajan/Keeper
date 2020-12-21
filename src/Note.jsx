import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { ZoomIn } from "@material-ui/icons";

function Note(props) {
    function deleteClick(){
        props.onDelete(props.id)
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}><Fab onClick={deleteClick}><DeleteIcon /></Fab></Zoom>
    </div>
  );
}

export default Note;
