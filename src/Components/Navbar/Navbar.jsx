import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "blue",
        paddingBottom: "15px",
      }}
    >
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/about">
        <button>ABOUT</button>
      </Link>
      <Link to="/form">
        <button>FORM</button>
      </Link>
    </div>
  );
};

export default Navbar;
