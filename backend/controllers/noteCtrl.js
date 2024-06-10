const Note = require("../models/noteModel");

const userId = "1234";
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user_id: userId }); 
    res.json(notes);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}
const createNote = async (req, res) => {
  try {
    const { title, content, date } = req.body;
    const newNote = new Note({
      title,
      content,
      date,
      user_id: userId,
    });
    await newNote.save();
    res.json({ msg: "Created a Note" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}
const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted a Note" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}
const updateNote = async (req, res) => {
  try {
    const { title, content, date } = req.body;
    await Note.findOneAndUpdate(
      { _id: req.params.id },
      {
        title,
        content,
        date,
      }
    );
    res.json({ msg: "Updated a Note" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}
const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};