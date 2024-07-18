import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";

export default function Nav() {
  return (
    <header>
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
