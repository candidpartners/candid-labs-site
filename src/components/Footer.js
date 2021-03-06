import React from 'react'
import { Link } from 'gatsby'
import { productName } from '../config'
import logo from '../img/CandidLabsLogo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter footer-container">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="candid labs"
            className="footer-logo"
          />
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
              <div className="columns footer-columns">
                <div className="column is-4 footer-menu">
                  <section className="menu">
                    <ul className="menu-list">
                      <li><Link to="/" className="navbar-item">Home</Link></li>
                      <li><Link className="navbar-item" to="/about">About</Link></li>
                      <li><Link className="navbar-item" to="/products">Products</Link></li>
                      <li>
                        <a
                          className="navbar-item"
                          href="/admin/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Admin
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column footer-menu is-4">
                  <section>
                    <ul className="menu-list">
                      <li><Link className="navbar-item" to="/blog">Blog</Link></li>
                      <li><Link className="navbar-item" to="/contact">Contact</Link></li>
                      <li><Link className="navbar-item" to="/privacy">Privacy Policy</Link></li>
                      <li><Link className="navbar-item" to="/volker-eula">{productName} EULA</Link></li>
                    </ul>
                  </section>
                </div>
                <div className="column footer-menu is-4 social">
                  <a title="facebook" href="https://facebook.com">
                    <img 
                      src={facebook}
                      alt="Facebook"
                      className="social-btn"
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg social-btn"
                      src={twitter}
                      alt="Twitter"
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                    src={instagram}
                    alt="Instagram"
                    className="social-btn"
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                    src={vimeo}
                    alt="Vimeo"
                    className="social-btn"
                    />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
