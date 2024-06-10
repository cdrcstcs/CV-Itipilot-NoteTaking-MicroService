import Note from "../models/Note"
const getAllNotes = async (req, res) => {
  const { userId, name } = req.body;
  try {
    const notes = await Note.find({ userId: userId });
    if (!notes) {
      return res.status(500).json({ msg: "Something went wrong" });
    }
    return res.status(200).json({ msg: "Data fetched", name: name, notes: notes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getSingleNote = async (req, res) => {
  const id = req.params.id;
  try {
    const singleNote = await Note.findOne({ _id: id });
    if (!singleNote) {
      return res.status(404).json({ msg: "Note not found" });
    }
    return res.status(200).json({ msg: "Note fetched", note: singleNote });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const createNote = async (req, res) => {
  const { userId, heading, description, tag } = req.body;
  if (!userId || !heading || !description || !tag) {
    return res.status(400).json({ msg: "Please fill all the input fields" });
  }
  const payload = req.body;
  const newPayload = { ...payload, userId: userId };
  const notes = new Note(newPayload);
  try {
    await notes.save();
    return res.status(201).json({ msg: "Note Created" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ msg: "Something went wrong" });
  }
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await Note.findByIdAndUpdate({ _id: id }, payload);
    return res.status(200).json({ msg: "Note updated" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ msg: "Something went wrong" });
  }
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    await Note.findByIdAndDelete({ _id: id });
    return res.status(200).json({ msg: "Note deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

export {getAllNotes,getSingleNote,createNote,updateNote,deleteNote};
