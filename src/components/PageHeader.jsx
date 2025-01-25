import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageHeader.css";
function PageHeader() {
  
  return (
    <div className="pageheader">
      <span className="logo"><RouterLink to="/" className="logo">Chinese Art Gallery</RouterLink></span>
      <nav className="nav">
        <RouterLink to="/fans-book1" className="nav_menuitem">Fan Book 1</RouterLink>
        <RouterLink to="/fans-book2" className="nav_menuitem">Fan Book 2</RouterLink>
        <RouterLink to="/" className="nav_menuitem">Mountain Book</RouterLink>
        <RouterLink to="/" className="nav_menuitem">Mountain and Forest Book</RouterLink>
        <RouterLink to="/" className="nav_menuitem">Landscape Book 1</RouterLink>
        <RouterLink to="/" className="nav_menuitem">Landscape Book 2</RouterLink>
        <RouterLink to="/" className="nav_menuitem">Letters Book</RouterLink>
        <RouterLink to="/" className="nav_menuitem">Individual Scroll Paintings</RouterLink>
        <RouterLink to="/" className="nav_menuitem">Individual Scroll Calligraphy</RouterLink>
      </nav>
    </div>
  );
}

/* <Link
  url="/web/music-calendar/privacy-policy.html"
  displayText="Privacy Policy"
/>; */

export default PageHeader;
