import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageHeader.css";
function PageHeader() {
  
  return (
    <div className="pageheader">
      <span className="logo"><RouterLink to="/" className="logo">Asian Art Gallery</RouterLink></span>
      <nav className="nav">
        <RouterLink to="/fans-book1" className="nav_menuitem">Landscape Book 1</RouterLink>
        <RouterLink to="/fans-book1" className="nav_menuitem">Landscape Book 2</RouterLink>
        <RouterLink to="/fans-book1" className="nav_menuitem">Landscape Book 3</RouterLink>
        <RouterLink to="/fans-book1" className="nav_menuitem">Landscape Book 4</RouterLink>
        <RouterLink to="/fans-book1" className="nav_menuitem">Landscape Book 5</RouterLink>
        <RouterLink to="/fans-book1" className="nav_menuitem">Fans Book 1</RouterLink>
        <RouterLink to="/fans-book1" className="nav_menuitem">Fans Book 2</RouterLink>
      </nav>
    </div>
  );
}

/* <Link
  url="/web/music-calendar/privacy-policy.html"
  displayText="Privacy Policy"
/>; */

export default PageHeader;
