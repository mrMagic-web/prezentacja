import React, { Component } from "react";
import FullBackground from "../FullBackground";
import PhotoLeft from "../PhotoLeft";
import PhotoRight from "../PhotoRight";
import NoPhoto from "../NoPhoto";
import AnimatedWrapper from "../AnimatedWrapper";
import "./Slide.css";

class SlideComponent extends Component {
  render() {
    return (
      <div className="page">
        {(() => {
          switch (this.props.layout) {
            case "photo-full":
              return <FullBackground {...this.props} />;
            case "photo-left":
              return <PhotoLeft {...this.props} />;
            case "photo-right":
              return <PhotoRight {...this.props} />;
            default:
              return <NoPhoto {...this.props} />;
          }
        })()}
      </div>
    );
  }
}

const Slide = AnimatedWrapper(SlideComponent);
export default Slide;
