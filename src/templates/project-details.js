import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { date } = data.markdownRemark.frontmatter

  return (
    <Layout>
        <div>
          <h2 className='postTitle_detail'>{title}</h2>
          {/* <p className='postDate'>{date}</p> */}
          <div className='postDesc_detail' dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
