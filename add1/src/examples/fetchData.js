import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <h2>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name}:{item.age}
            </p>
          )
        })}
      </h2>
    </div>
  )
}

export default ComponentName
