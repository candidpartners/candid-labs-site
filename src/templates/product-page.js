import React from 'react'
import showdown from 'showdown'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const converter = new showdown.Converter();

const MarkdownContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
);

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export const ProductPageTemplate = ({
  image,
  title,
  subheading,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
<section className="section section--gradient">
  <div
    className="full-width-image-container margin-top-0 product-banner-img"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image
      })`,
      backgroundPosition: `top left`,
      height: '95vh'
    }}
  >
  <div style={{ margin: '0 3em', zIndex: '3'}}>
    <h2
      className="has-text-weight-bold"
      style={{
        fontSize: '4em',
        opacity: '0.8',
        color: 'rgb(255, 255, 255)'
      }}
    >
      {title}
    </h2>
    <h3 className="has-text-weight-bold"
          style={{
            fontSize: '2em',
            marginTop: '.5em',
            color: 'rgb(255, 255, 255)'
          }}
      >
        {subheading}
    </h3>
  </div>
  </div>
  <div className="container">
    <div className="section">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {intro.heading}
                  </h3>
                  <MarkdownContent content={intro.description} />
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div>
                  <h3 className="has-text-weight-semibold is-size-3 has-text-centered">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <h2 className="has-text-weight-semibold is-size-2 has-text-centered">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
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
        main {
          heading
          description
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
