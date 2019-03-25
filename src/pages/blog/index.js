import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import BlogLatest from '../../components/BlogLatest'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section" style={{ paddingTop : '0'}}>
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0 blog-banner-img"
                style={{ backgroundImage: `url('/img/blogs-img.jpg')` }}
              >
              <div className="blog-banner-text">
                <h1 className="has-text-weight-bold blog-banner-h1">
                  <span>
                    read the latest from
                  </span>
                  <br />
                  Candid Labs
                </h1>
                <div className="latest-blog-container">
                  <BlogLatest className="blog-latest" />
                </div> 
              </div>
              </div>
              <BlogRoll />
            </div>
            </div>
        </section>
      </Layout>
    )
  }
}
