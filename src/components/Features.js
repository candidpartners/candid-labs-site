import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import template from '../templates/variables'

const FeatureGrid = ({ gridItems, curve }) => (
  <div>
    {gridItems.map((item, index) => {
      if(index%2){
        return (
          <div key={item.text} className="features-container">
              <PreviewCompatibleImage className="features-img" imageInfo={item.image} curve={curve} side='left'/>
              <p className="features-text">{template(item.text)}</p>
          </div>
        ) 
      }
      else {
        return (
          <div key={item.text} className="features-container">
            <p className="features-text">{template(item.text)}</p>
            <PreviewCompatibleImage className="features-img" side='right' curve={curve} imageInfo={item.image} />
          </div>
        ) 
      }
        
    }

    )}
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
