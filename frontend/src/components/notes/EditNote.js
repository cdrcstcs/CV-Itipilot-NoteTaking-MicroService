import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
    id: "",
  });
  const { id } = useParams(); // Accessing route parameter directly
  const navigate = useNavigate();

  useEffect(() => {
    const getNote = async () => {
      try {
        if (id) { // Check if id exists
          const res = await axios.get(`http://localhost:4600/note/${id}`);
          const { title, content, date, _id: noteId } = res.data; // Use a different variable name to avoid conflict
          setNote({
            title,
            content,
            date: new Date(date).toISOString().substr(0, 10), // Format date as ISO string
            id: noteId, // Use a different variable name to avoid conflict
          });
        }
      } catch (err) {
        console.error("Error fetching note:", err);
        // Redirect to home or display an error message
        navigate("/");
      }
    };
    getNote();
  }, [id, navigate]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const editNote = async (e) => {
    e.preventDefault();
    try {
      const { title, content, date, id: noteId } = note; // Use a different variable name to avoid conflict
      const updatedNote = {
        title,
        content,
        date,
      };
      await axios.put(`http://localhost:4600/note/${noteId}`, updatedNote); // Use the correct variable name
      navigate("/");
    } catch (err) {
      console.error("Error updating note:", err);
      // Redirect to home or display an error message
      navigate("/");
    }
  };

  return (
    <div className="create-note">
      <h2>Edit Note</h2>
      <form onSubmit={editNote} autoComplete="off">
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

        <label htmlFor="date">New Deadline (Current: {note.date} ) </label>
        <div className="row">
          <input type="date" id="date" name="date" onChange={onChangeInput} />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
