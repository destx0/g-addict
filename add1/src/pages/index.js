import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <>
      <Layout>
        <div className={page}>
          Hello world!
          <h1> h1 element </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            expedita maiores sunt nulla quia dolorem nesciunt commodi libero
            corporis vero porro dolores neque quam incidunt, minus cumque et
            numquam maxime.
          </p>
        </div>
        <Link to="/about">about</Link>
      </Layout>
    </>
  )
}
