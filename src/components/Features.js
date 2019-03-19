import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map((item, index) => {
      if(index%2){
        return (
          <div key={item.text} style={{ marginBottom: '5em'}}>
              <PreviewCompatibleImage imageInfo={item.image} side='left' style={{  margin: "5em" }}/>
              <p style={{ margin: "5em", display: "inline-block", maxWidth: '400px'}}>{item.text}</p>
          </div>
        ) 
      }
      else {
        return (
          <div key={item.text} style={{ marginBottom: '5em'}}>
            <p style={{  margin: "5em", display: "inline-block", maxWidth: '400px'}}>{item.text}</p>
            <PreviewCompatibleImage style={{ margin: "5em" }} side='right' imageInfo={item.image} />
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
