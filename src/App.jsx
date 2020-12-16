import React from "react";
import Note from "./Note";
import Footer from "./Footer";
import Header from "./Header";
import notes from "./notes";

function App(){
    return(<div>
        <Header />
        <Footer />
        {notes.map(notesEntry => 
            <Note key={notesEntry.key}
            title= {notesEntry.title}
            content= {notesEntry.content}
    />)
        }
    </div>)
}

export default App;