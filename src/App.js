import React, { Component } from "react";
import "./App.css";
import Slide from "./components/Slide";
import slides from "./data/slides";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { Route, Link } from "react-router-dom";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/0">Home</Link>
          <Link to="/1">Subpage</Link>
          <Link to="/2">Page</Link>
        </div>
        {slides.map(
          (slide, i) =>
            i === 0 ? (
              <Route
                exact
                path={`/${i}`}
                key={slide.title}
                children={({ match, ...rest }) => (
                  <TransitionGroup component={firstChild}>
                    {match && (
                      <Slide
                        {...rest}
                        title={slide.title}
                        background={slide.background}
                        subtitle={slide.subtitle}
                        icon={slide.icon}
                        layout={slide.layout}
                      />
                    )}
                  </TransitionGroup>
                )}
              />
            ) : (
              <Route
                exact
                path={`/${i}`}
                key={slide.title}
                children={({ match, ...rest }) => (
                  <TransitionGroup component={firstChild}>
                    {match && (
                      <Slide
                        {...rest}
                        title={slide.title}
                        background={slide.background}
                        subtitle={slide.subtitle}
                        icon={slide.icon}
                        layout={slide.layout}
                      />
                    )}
                  </TransitionGroup>
                )}
              />
            )
        )}
      </div>
    );
  }
}

export default App;
