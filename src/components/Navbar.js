import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      class="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <Link className="navbar-item" to="/">
          DimeBooks SG
        </Link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/search">
            Popular
          </Link>
          <Link className="navbar-item" to="/scan">
            Scan
          </Link>
        </div>

        <div class="navbar-end">
          <Link className="navbar-item" to="/cart">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
