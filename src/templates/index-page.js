import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Slider from '../components/Slider'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const IndexPageTemplate = ({
  images,
  slideText,
  intro,
}) => (
    <div>
      <div className="slide-container">
        <Slider text={slideText} images={images} />
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <Features gridItems={intro.blurbs} curve={false} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered products-link-div">
                      <h3>See all products</h3>
                      <Link to="/products">
                        <i class="fas fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
)

IndexPageTemplate.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        images={frontmatter.images}
        title={frontmatter.title}
        slideText={frontmatter.text}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        text {
          heading
          subheading
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
