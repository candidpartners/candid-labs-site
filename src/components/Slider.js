import React from 'react'
import Slide from './Slide'

class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state={
            images: props.images,
            currentSlide: 0,
            slideText: props.text
        }
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
            <div className="slider">
              <div className="slider-wrapper">
                <Slide 
                  index={currentSlide}
                  image={images[currentSlide].image}
                  heading={slideText[currentSlide].heading}
                  subheading={slideText[currentSlide].subheading}
                />
                <div className="dot filled" id="0" onClick={this.handleClickOne}/>
                <div className="dot" id="1" onClick={this.handleClickTwo}/>
                <div className="dot" id="2" onClick={this.handleClickThree}/>

              </div>
            </div>
        )
    }
}


export default Slider

