import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogLatest extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const post = posts && posts[0].node
    console.log(post)
    return (
      <div className="columns is-multiline blog-latest">
        <div key={post.id}>
          <article>
            <p>
              <Link to={post.fields.slug} className="title is-size-3 blog-latest">
                {post.frontmatter.title}
              </Link>
              <br />
              <br />  
              <span className="subtitle is-size-6 is-block blog-latest">{post.excerpt}</span>
            </p>
            <br />
            <p>
              <Link className="btn blog-latest" to={post.fields.slug}>
                  Read More →
              </Link>
            </p>
          </article>
        </div>
        
      </div>
    );
  }
}

BlogLatest.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogLatestQuery {
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
      <BlogLatest data={data} count={count} />
    )}
  />
)
