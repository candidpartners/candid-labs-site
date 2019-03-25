import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="columns pricing">
    {data.map(price => (
      <div key={price.plan} className="column pricing">
        <section className="section">
          <div className="pricing-module">
            <h4 className="has-text-weight-semibold">
              {price.plan}
            </h4>
          </div>
          <h2 className="has-text-weight-bold has-text-primary">
            {price.price}
          </h2>
          <p className="has-text-weight-semibold">{price.description}</p>
          <ul className="ul pricing">
            {price.items.map(item => (
              <li key={item} className="is-size-6 li pricing">
                <p className="icon li pricing"><i class="far fa-check-circle"></i> </p><p className="pricing info li">{item}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
