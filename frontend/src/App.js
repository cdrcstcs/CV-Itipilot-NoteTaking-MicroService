import React from "react";
import Notes from "./components/Notes";
import { getCookie } from "./cookie";
function App() {
  if (!getCookie('usertoken')){
    return null;
  }
  return (
    <div className="App">
      <Notes/>
    </div>
  );
}
export default App;
