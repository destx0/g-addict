import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const about = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          about
          <h1>Wrapped</h1>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.section`
  color: blue;
`
export default about
