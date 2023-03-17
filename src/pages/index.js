import * as React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"

export default function Home( {data} ) {
  // const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
        <div>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I've Created</h3>
            <div>
              
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`
