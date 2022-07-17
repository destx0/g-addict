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
    <section className="recipes-container">
      <TagsList recipies={recipies} />
      <RecipiesList recipies={recipies} />
    </section>
  )
}

export default AllRecipies
