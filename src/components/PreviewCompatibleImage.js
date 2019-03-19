import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, side }) => {
  let imageStyle
  if(side === 'left'){
    imageStyle = { 
      transform: 'perspective(30em) rotateY(30deg)',
      borderRadius: '5px',
      maxWidth: '300px',
      width: '300px',
      display:'inline-block',
      boxShadow: '2em 2em 2em gray'
    }
  }
  if(side === 'right'){
    imageStyle = { 
      transform: 'perspective(30em) rotateY(-30deg)',
      borderRadius: '5px',
      maxWidth: '300px',
      width: '300px',
      display:'inline-block',
      boxShadow: '2em 2em 2em gray'
    }
  }
  
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
