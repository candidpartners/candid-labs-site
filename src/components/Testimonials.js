import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Testimonials = ({ testimonials }) => (
  <div style={{ overflow: 'hidden'}}>
    {testimonials.map((testimonial, index) => {
      if(index%2){
        return (
          <section key={v4()} className="testimonial" style={{ float: 'right'}}>
            <div>
              {testimonial.quote}
              <br />
              <cite> – {testimonial.author}</cite>
            </div>
          </section>
        )
      }
      else {
        return (
          <section key={v4()} className="testimonial" style={{ float: 'left'}}>
            <div>
              {testimonial.quote}
              <br />
              <cite> – {testimonial.author}</cite>
            </div>
          </section>
        )
      }
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
