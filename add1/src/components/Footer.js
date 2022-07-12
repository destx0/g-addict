import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy;
        {new Date().getFullYear()}
        <span> SimplyRecipies </span>
        Built with
        <a href="http://https://www.gatsbyjs.com"> gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
