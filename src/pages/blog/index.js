import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/blog-index.jpg')`,
                  height: '100vh'
                }}
              >
              <div
                style={{
                  width: '100%',
                  textAlign: 'right',
                  paddingRight: '8em',
                }}
              >
                <h1
                    className="has-text-weight-bold"
                    style={{
                      color: 'white',
                      padding: '1rem',
                      fontSize: '5em',
                    }}
                  >
                    Latest Stories
                  </h1>
              </div>
              </div>
            </div>
              <BlogRoll />
            </div>
        </section>
      </Layout>
    )
  }
}
