import React, { useEffect } from "react";
import "./Nav.css";
import imgavatar from "../images/nbflix-avatar.png";
import imglogo from "../images/nbflix-logo.png";
function Nav() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-grey"}`}>
      <img className="nav-logo" src={imglogo} alt="Nbflix"></img>
      <img className="nav-avatar" src={imgavatar} alt="Nbavatar"></img>
    </div>
  );
}

export default Nav;
