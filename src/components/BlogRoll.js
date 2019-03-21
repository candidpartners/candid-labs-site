import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="columns is-multiline">
      {posts && (posts
          .map(({ node: post }) => (
            <div
              className="is-parent column is-4"
              key={post.id}
            >
            <article>
              <Link to={post.fields.slug}>
                <div
                  className="full-width-image-container margin-top-0 blog-img"
                  style={{
                    backgroundImage: `url(${
                      !!post.frontmatter.image.childImageSharp
                        ? post.frontmatter.image.childImageSharp.fluid.src
                        : post.frontmatter.image
                    })`,
                  }}
                />
              </Link>
              <p>
                <span className="title has-text-primary is-size-4">
                  {post.frontmatter.title}
                </span>
                <span> &bull; </span>
                <br />
                <br />  
                <span className="subtitle is-size-6 is-block blog-roll">{post.frontmatter.date}</span>
              </p>
              <br />
              <p>
                <Link className="btn" to={post.fields.slug}>
                  Blog Post →
                </Link>
              </p>
              </article>
            </div>
          )))}
          </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
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
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)
