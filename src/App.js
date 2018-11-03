import React, { Component } from "react";
import "./App.css";
import Slide from "./components/Slide";
import slides from "./data/slides";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {slides.map((slide, i) => (
          <Route exact path={`/${i}`} key={`slide-${i}`}>
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
          </Route>
        ))}
      </div>
    );
  }
}

export default App;
