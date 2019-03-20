import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import BlogLatest from '../../components/BlogLatest'

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
                  backgroundImage: `url('/img/blogs.jpg')`,
                  height: '130vh'
                }}
              >
              <div
                style={{
                  width: '100%',
                  height: '100vh',
                  textAlign: 'left',
                  paddingLeft: '8em',
                }}
              >
                <h1
                    className="has-text-weight-bold"
                    style={{
                      color: '#333333',
                      padding: '1rem',
                      fontSize: '5em',
                    }}
                  >
                  <span
                    style={{
                      color: 'white',
                      fontSize: '3rem',
                    }}>
                    read the latest from
                  </span>
                  <br />
                  Candid Labs
                </h1>
                <div
                  style={{
                    width: '50%', backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '3em'
                  }}
                >
                  <BlogLatest />
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
