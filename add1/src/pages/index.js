import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div>Hello world!</div>
        <Link to="/about">about</Link>
      </div>
    </>
  )
}
