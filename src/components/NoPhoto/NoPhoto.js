import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ContentArea from "../ContentArea";
class NoPhoto extends Component {
  render() {
    return (
      <div>
        <Grid.Column className="full-background">
          <ContentArea {...this.props} />
        </Grid.Column>
      </div>
    );
  }
}

export default NoPhoto;
