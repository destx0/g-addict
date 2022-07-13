import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// import styled from "styled-components"

const About = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <section className="about-page">
            <article>
              <h2>Lorem ipsum dolor sit amet consectetur,</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur a iusto consequuntur odit atque fugiat soluta
                aliquid at tenetur mollitia,
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur a iusto consequuntur odit atque fugiat soluta
                aliquid at tenetur mollitia,
              </p>

              <Link className="btn">contact</Link>
            </article>
            <StaticImage src="../assets/images/about.jpeg" alt="image" />
          </section>
        </main>
      </Layout>
    </>
  )
}

// const Wrapper = styled.section`
//   color: blue;
// `
export default About
