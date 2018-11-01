import React, { Component } from "react";
import FullBackground from "../FullBackground";
import PhotoLeft from "../PhotoLeft";
import PhotoRight from "../PhotoRight";
import NoPhoto from "../NoPhoto";
import "./Slide.css";

class Slide extends Component {
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

export default Slide;
