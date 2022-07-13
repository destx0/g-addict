import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import FetchData from "../examples/fetchData"
import FetchDuta from "../examples/fetchDuta"
// import { page, text } from "../examples/home.module.css"
// import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <>
      <Layout>
        <main className="page">
          <header className="hero">
            <StaticImage
              className="hero-img"
              src="../assets/images/main.jpeg"
              alt="eggs"
              placeholder="tracedSVG"
              layout="fullWidth"
            ></StaticImage>
            <div className="hero-container">
              <div className="hero-text">
                <h1>simply recipies</h1>
                <h4>no fluff,just recipies</h4>
              </div>
            </div>
          </header>
          <FetchData />
          <FetchDuta />
        </main>
      </Layout>
    </>
  )
}
