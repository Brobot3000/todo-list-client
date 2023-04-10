import { NavLink } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <FaHome /> Home
      </NavLink>
      <NavLink to="add">
        Voeg een todo toe <FaPlus />
      </NavLink>
    </nav>
  );
}

export default Navbar;
