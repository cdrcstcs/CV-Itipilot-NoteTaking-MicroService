import Note from "../models/noteModel.js";
import User from "../models/user.js";
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user_id:(await User.findOne())._id}); 
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
      user_id: (await User.findOne())._id,
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
    await Note.findByIdAndUpdate(
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
// const getUserId = async (req, res) => {
//   try {
//     cookie.set('userId',req.params.id);
//     // console.log(req.params.id);
//     res.json('ok');
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// }

export {
  // getUserId,
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};