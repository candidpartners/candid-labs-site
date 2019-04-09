import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import template from './variables'

export const EULAPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const interpolated = template(content)
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={interpolated} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

EULAPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EULAPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EULAPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

EULAPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EULAPage

export const EULAPageQuery = graphql`
  query EULAPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
