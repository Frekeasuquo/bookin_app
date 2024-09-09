import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {

  const { user, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };
  

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' style={{ color: "inherit", textDecoration: "none"}}>
          <span className="logo">Ndifreke</span>
        </Link>
        {user ? (
            <div className="">
              <span className="one">{user.username}</span>
              <button className="navButton" onClick={handleClick}>Logout</button>
            </div>
          ) : (
            <div>
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar