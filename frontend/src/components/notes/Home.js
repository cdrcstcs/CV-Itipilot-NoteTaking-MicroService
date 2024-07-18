import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
// import { getCookie } from "../../cookie";
import iaxios from "../../axiosSetUp";
export default function Home() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const res = await iaxios.get("http://localhost:4600/note",
    // {
    //   headers:{
    //     Authorization: `Bearer ${getCookie('usertoken')}`
    //   }
    // }
    );
    setNotes(res.data);
  };

  useEffect(() => {
  getNotes();
  }, []);

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:4600/note/${id}`);
      getNotes();
    } catch (error) {
      window.location.href = "/";
    }
  };

  return (
    <div className="note-wrapper" >
      {notes.map((note) => (
        <div className="card" key={note._id}>
          <h4 title={note.title}>{note.title}</h4>
          <div className="text-wrapper">
            <p>{note.content}</p>
          </div>
          <p className="date">deadline {format(note.date)}</p>
          <div className="card-footer">
            <Link to={`edit/${note._id}`}>
              <EditIcon />
            </Link>
          </div>
          <button className="delete" onClick={() => deleteNote(note._id)}>
            <DeleteIcon />
          </button>
        </div>
      ))}
    </div>
  );
}
