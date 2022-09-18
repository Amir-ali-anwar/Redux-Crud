import React from 'react'
import Links from "../utils/links";
import { NavLink } from "react-router-dom";
const Navbar = () => {
   return (
     <div className="nav-links">
       {Links.map((Links) => {
         const { text, path, id, icon } = Links;
         return (
           <NavLink
             to={path}
             key={id}
             className={({ isActive }) =>
               isActive ? "nav-link active" : "nav-link"
             }
           >
             <span className="icon">{icon}</span>
             {text}
           </NavLink>
         );
       })}
     </div>
   );
}

export default Navbar