import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'




export const SupportPageTemplate = ({
  image,
  title,
}) => (
<section className="section section--gradient" style={{ paddingTop: '0'}}>
  <div
    className="full-width-image-container margin-top-0 support-banner-img"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image
      })`
    }}
  >
    <div className="support-banner-header">
      <h2 className="has-text-weight-bold support-head">
        {title}
      </h2>
    </div>
  </div>
  <div className="support-text">
    Support can be reached via email at info@candidlabs.io.<br />
    You will recieve a response within 4 business hours.
  </div>
</section>
)

SupportPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const SupportPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SupportPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
      />
    </Layout>
  )
}

SupportPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SupportPage

export const supportPageQuery = graphql`
  query SupportPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
