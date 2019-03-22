import React from 'react'
import Slide from './Slide'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import Dots from './Dots'

class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state={
            images: ['/img/thinking-leader.jpg', '/img/laptop-meeting.jpg', 'img/overhead-meeting.jpg' ],
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

    handleClickOne = () => {
        let prev = document.getElementById(this.state.currentSlide.toString())
        prev.className = 'dot'
        let next = document.getElementById("0")
        next.className = next.className + " filled"
        this.setState({
            currentSlide: 0
        })
    }

    handleClickTwo = () => {
        let prev = document.getElementById(this.state.currentSlide.toString())
        prev.className = 'dot'
        let next = document.getElementById("1")
        next.className = next.className + " filled"
        this.setState({
            currentSlide: 1
        })
    }

    handleClickThree = () => {
        let prev = document.getElementById(this.state.currentSlide.toString())
        prev.className = 'dot'
        let next = document.getElementById("2")
        next.className = next.className + " filled"
        this.setState({
            currentSlide: 2
        })
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
                <div className="dot filled" id="0" onClick={this.handleClickOne} style={{ right: '52%' }}/>
                <div className="dot" id="1" onClick={this.handleClickTwo} style={{ right: '50%' }}/>
                <div className="dot" id="2" onClick={this.handleClickThree} style={{ right: '48%' }}/>

              </div>
            </div>
        )
    }
}


export default Slider

