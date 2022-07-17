import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const RecipiesList = (recipies = []) => {
  return (
    <div className="recipes-list">
      {recipies.map(recipie => {
        const { id, title, prepTime, cookTime } = recipie
        return (
          <Link key={id} to={`/${title}`}>
            {recipie.title}
          </Link>
        )
      })}
    </div>
  )
}

export default RecipiesList
