import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// this is the function for 
function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
const navigate = useNavigate()
  return (
    <nav class="mx-auto bg-primary text-light p-3"className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold fs-3">E R P</span>
        <button className="navbar-toggler" type="button" onClick={handleToggle} aria-expanded={expanded ? "true" : "false"} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse" + (expanded ? " show" : "")}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link active" aria-current="page" onClick={()=>{navigate('/dashboard')}}>Dashboard</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>{navigate('/product')}}>Products</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>{navigate('/order')}}>Orders</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>{navigate('/calender')}}>Calender</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
