import React from 'react'
import template from '../templates/variables'
import logo from '../img/MATTER-White-Blue-Caret.png'

const Slide = ({ image, heading, subheading, index }) => {
    return (
        <div className="full-width-image margin-top-0 slide index-banner-image" 
            style={{
                backgroundImage: `url(${
                !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                })`
            }}
            >
        
            <div className='index-page-banner'>
               { index === 0 ? <img
                    style={{ width: '70%', zIndex: '10'}}
                    src={logo}
                    alt="candid labs"
                    className="footer-logo"
                /> :
                <h1 className="has-text-weight-bold index-head">
                    {template(heading)}
                </h1>}
                <h3 className="has-text-weight-bold index-subhead">
                    {template(subheading)}
                </h3>
            </div>
        </div>

    )

}

export default Slide

