import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/tags"> tags</Link>
        </li>
        <li>
          <Link to="/contact"> contact</Link>
        </li>
        <li>
          <Link to="/recipies"> recipies</Link>
        </li>
        <li>
          <Link to="/about"> about</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
