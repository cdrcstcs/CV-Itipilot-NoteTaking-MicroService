import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../cookie";
export default function CreateNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
  });
  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const createNote = async (e) => {
    e.preventDefault();
    try {
      const { title, content, date } = note;
      const newNote = {
        title,
        content,
        date,
      };
      await axios.post("http://localhost:4600/note", newNote,{
        headers:{
          Authorization: `Bearer ${getCookie('usertoken')}`
        }
      });
      return history("/");
    } catch (err) {
      // window.location.href = "/";
      console.log(err);
    }
  };

  return (
    <div className="create-note">
      <h2>Add Note</h2>
      <form onSubmit={createNote} autoComplete="off">
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={note.title}
            id="title"
            name="title"
            required
            onChange={onChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">Take A Note...</label>
          <textarea
            type="text"
            value={note.content}
            id="content"
            name="content"
            required
            rows="2"
            onChange={onChangeInput}
          />
        </div>

        <label htmlFor="date">Deadline {note.date} </label>
        <div className="row">
          <input type="date" id="date" name="date" onChange={onChangeInput} />
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}
