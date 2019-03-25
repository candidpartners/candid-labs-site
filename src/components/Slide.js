import React from 'react'

const Slide = ({ image, heading, subheading }) => {
    return (
        <div className="full-width-image margin-top-0 slide index-banner-image" 
            style={{
                backgroundImage: `url(${
                !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                })`,
                transition: 'linear .5s',
                margin: '0'
            }}
            >
        
            <div className='index-page-banner'>
                <h1 className="has-text-weight-bold index-head">
                    {heading}
                </h1>
                <h3 className="has-text-weight-bold index-subhead">
                    {subheading}
                </h3>
            </div>
        </div>

    )

}

export default Slide

