import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"

export default function post({ data }) {
  const projects = data.projects.nodes

  return (
    <Layout>
        <h2>Posts</h2>
        <div className='posts'>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div className='post'>
                <h3 className='postTitle'>{project.frontmatter.title}</h3>
                <h4 className='postDesc'>{project.frontmatter.desc.substring(0, 70)}</h4>
                <p className='postDate'>{project.frontmatter.date}</p>
                <span className='stackTitle'>
                  {project.frontmatter.stack.split(", ").map(stack => (
                    <span key={stack} className='stack'>#{stack}</span>
                  ))}
                </span>
              </div>
            </Link>
          ))}
        </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          date(formatString: "YYYY-MM-DD")
          desc
        }
        id
      }
    }
  }
`