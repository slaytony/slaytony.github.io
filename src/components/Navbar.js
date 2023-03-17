import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import '../css/global.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site{
        siteMetadata{
          title
        }
      }
      file(relativePath: {eq: "gate.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)
  
  // const {title} = data.site.siteMetadata
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <div className='introduce'>
      <div className='intro'>
        <GatsbyImage className='intro_img' image={image} alt="Gate Image" />
        <h1> text </h1>
        <div className='introDetail'>
          <h3> text1 </h3>
          <h3> text2 </h3>
          <h3> text3 </h3>
        </div>
      </div>

      <hr className='navbarHr'/>

      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/skill">Skills</Link>
          <Link to="/post">Posts</Link>
      </div>
    </div>
  )
}
