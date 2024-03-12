import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Navbar component
function Navbar() {
  // State to manage the expanded/collapsed state of the navbar
  const [expanded, setExpanded] = useState(false);

  // Function to handle the toggle of the navbar
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // Hook to enable navigation in React Router
  const navigate = useNavigate();

  // JSX for the Navbar component
  return (
    <nav
      class="mx-auto bg-primary text-light p-3"
      className="navbar navbar-expand-lg bg-body-tertiary"
    >
      <div className="container-fluid">
        {/* Brand/logo of the navbar */}
        <span className="navbar-brand fw-bold fs-3">E R P</span>

        {/* Button to toggle the navbar on smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-expanded={expanded ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className={"collapse navbar-collapse" + (expanded ? " show" : "")}>
          <ul className="navbar-nav">
            {/* Dashboard link */}
            <li className="nav-item">
              <button
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </button>
            </li>

            {/* Products link */}
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  navigate("/product");
                }}
              >
                Products
              </button>
            </li>

            {/* Orders link */}
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  navigate("/order");
                }}
              >
                Orders
              </button>
            </li>

            {/* Calendar link */}
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  navigate("/calender");
                }}
              >
                Calendar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Export the Navbar component as the default export
export default Navbar;
