import React, { Component } from "react";
import "./App.css";
import Slide from "./components/Slide";
import slides from "./data/slides";
import Slider from "react-slick";

class App extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="App">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div>
              <Slide
                slideNumber={i}
                key={slide.title}
                title={slide.title}
                background={slide.background}
                subtitle={slide.subtitle}
                icon={slide.icon}
                layout={slide.layout}
                text={slide.text}
                link={slide.link}
                list={slide.list}
                code={slide.code}
                commentedcode={slide.commentedcode}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
