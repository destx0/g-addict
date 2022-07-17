import React from "react"
import TagsList from "./TagsList"
import RecipiesList from "./RecipiesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipie {
      nodes {
        id
        title
        cookTime
        preptime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipies = () => {
  const data = useStaticQuery(query)
  const recipies = data.allContentfulRecipie.nodes
  //   const {
  //     allContentfulRecipie: { nodes: recipies},
  //   } = useStaticQuery(query)
  //   console.log(data)
  //   const recipies = data.allContentfulRecipie.nodes
  //   console.log(recipies)
  return (
    <div>
      <h4>All recipies</h4>
      <TagsList recipies={recipies} />
      <RecipiesList recipies={recipies} />
    </div>
  )
}

export default AllRecipies
