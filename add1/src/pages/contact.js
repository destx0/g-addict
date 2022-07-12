import React from "react"
import Layout from "../components/Layout"
// import styled from "styled-components"

const Contact = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article>
              <h3>I'm baby vice plaid</h3>
              <p>
                I'm baby vice plaid copper mug listicle tofu iPhone shabby chic
                wayfarers yr street art twee pop-up chartreuse. Artisan actually
                flannel air plant kale chips, small batch hashtag butcher
                kickstarter distillery yr fanny pack photo booth neutra.
                Truffaut trust fund sriracha, vinyl sartorial DSA whatever air
              </p>
              <p>
                I'm baby vice plaid copper mug listicle tofu iPhone shabby chic
              </p>
              <p>
                I'm baby vice plaid copper mug listicle tofu iPhone shabby chic
              </p>
            </article>
            <article>
              <form action="" className="form contact-form">
                <div className="form-row">
                  <label htmlFor="">your name</label>
                  <input type="text" />
                </div>
                <div className="form-row">
                  <label htmlFor="">your email</label>
                  <input type="text" />
                </div>
                <div className="form-row">
                  <label htmlFor="">message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button className="btn block">submit</button>
              </form>
            </article>
          </section>
        </main>
      </Layout>
    </>
  )
}

// const Wrapper = styled.section`
//   color: blue;
// `
export default Contact
