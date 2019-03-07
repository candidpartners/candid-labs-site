import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const RefundPageTemplate = ({ title, content, contentComponent }) => {
  const RefundContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

RefundPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const RefundPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RefundPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

RefundPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RefundPage

export const RefundPageQuery = graphql`
  query RefundPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
