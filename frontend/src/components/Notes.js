import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./notes/Nav";
import Home from "./notes/Home";
import CreateNote from "./notes/CreateNote";
import EditNote from "./notes/EditNote";

export default function Notes() {
  return (
    <Router>
      <div className="notes-page">
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/edit/:id" element={<EditNote />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}
