import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

export default function Nav() {
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">Noted! <AssignmentTurnedInIcon /></Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link to="/create">
            <AddIcon />
          </Link>
        </li>
      </ul>
    </header>
  );
}
