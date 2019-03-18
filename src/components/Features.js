import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    flexWrap: "wrap"
  }}>
    {gridItems.map(item => (
      <div key={item.text} 
           style={{ 
             flex: "1 1 300px",
             maxWidth: "500px",
             display: "inline-block"
             }}
      >
        <section className="section">
          <div className="has-text-centered">
            <div>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p style={{ margin: "1.5em"}}>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
