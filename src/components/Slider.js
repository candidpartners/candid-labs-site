import React from 'react'
import Slide from './Slide'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'

class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state={
            images: ['/img/thinking-leader.jpg', '/img/staff-meeting.jpg', 'img/automate.jpg' ],
            currentSlide: 0,
            slideText: props.text
        }
    }

    goBack = () => {
        if(this.state.currentSlide - 1 < 0) {
            return this.setState({
                currentSlide: this.state.images.length - 1 
            })
          }
          this.setState( prevState => ({
            currentSlide: prevState.currentSlide - 1
          }))
    }

    goForward = () => {
      if(this.state.currentSlide === this.state.images.length - 1) {
        return this.setState({
            currentSlide: 0
        })
      }
      this.setState( prevState => ({
        currentSlide: prevState.currentSlide + 1
      }))
    }


    render(){
        const { images, currentSlide, slideText } = this.state
        return (
            <div className="slider" style={{ position: 'relative' }}>
              <div className="slider-wrapper">
                <Slide 
                  image={images[currentSlide]}
                  heading={slideText[currentSlide].heading}
                  subheading={slideText[currentSlide].subheading}
                />
                <LeftArrow 
                  goBack={this.goBack}
                />
                <RightArrow
                  goForward={this.goForward}
                />
              </div>
            </div>
        )
    }
}


export default Slider

