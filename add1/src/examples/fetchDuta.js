import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchDuta = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)
  //   console.log(data)
  return (
    <div>
      fetchDuta
      {/* <h2>Name:{data.site.siteMetadata.person.name}</h2> */}
      <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchDuta
