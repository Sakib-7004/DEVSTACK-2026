import {useState} from "react";
function Navbar(){
  const [menuOpen, setMenuOpen]=useState(false);
  const closeMenu=()=>{
    setMenuOpen(false);
  };
  return(
  <header className="navbar">
    <div className="navbar-inner">
      <button className="hamburger-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Open navigation menu">
        <img src={`${import.meta.env.BASE_URL}assets/hamburger.png`} alt=""/></button>
        <a className="brand" href="#home">
        <img src={`${import.meta.env.BASE_URL}assets/logo-text.png`} alt="Dev Stack"/></a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#technologies" onClick={closeMenu}>Technologies</a>
            <a href="#technologies" onClick={closeMenu}>Projects</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a></nav>
            <div className="auth-buttons">
              <button className="sign-in">Sign In</button>
              <button className="sign-up">Sign Up</button></div></div></header>
              );}
              export default Navbar;
