import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class SupportPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  } 
  render(){
    return (
      <Layout>
        <div className="support-form">
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
          Let us help you...
        </h2>
        <h3>Fill out the form below, or email us at info@candidlabs.io</h3>
        <br />
        <br />
        <div>
          <form
            name="support"
            method="post"
            action="/support/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor={'firstName'}>
                First Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'firstName'}
                  onChange={this.handleChange}
                  id={'firstName'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'lastName'}>
                Last Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'lastName'}
                  onChange={this.handleChange}
                  id={'lastName'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'email'}>
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'email'}
                  name={'email'}
                  onChange={this.handleChange}
                  id={'email'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'title'}>
                Title
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'title'}
                  onChange={this.handleChange}
                  id={'title'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'company'}>
                Company
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'company'}
                  onChange={this.handleChange}
                  id={'company'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'reason'}>
                Reason for requesting support
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name={'reason'}
                  onChange={this.handleChange}
                  id={'reason'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <button className="button is-link contact-button" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
        </div>
      </Layout>
    )
  }
}
