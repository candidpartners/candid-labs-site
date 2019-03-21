import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Testimonials = ({ testimonials }) => (
  <div style={{ overflow: 'hidden', margin: '3em'}} className="columns">
    {testimonials.map(( testimonial ) => {
      return (
        <section key={v4()} className="testimonial column is-6" style={{ margin: '2em' }} >
          <div style={{ padding: '1em'  }}>  
            {testimonial.quote}
            <br />
            <br />
            <br />
            <cite> – {testimonial.author}</cite>
          </div>
        </section>
      )
    } )}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
