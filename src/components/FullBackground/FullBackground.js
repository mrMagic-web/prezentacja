import React, { Component } from "react";
import "./FullBackground.css";
import { Grid } from "semantic-ui-react";
import ContentArea from "../ContentArea";
class FullBackground extends Component {
  render() {
    const { background } = this.props;
    return (
      <div>
        <Grid.Column className="full-background">
          <div
            className="background"
            style={{ backgroundImage: `url(./image/${background})` }}
          />
          <ContentArea {...this.props} />
        </Grid.Column>
      </div>
    );
  }
}

export default FullBackground;
