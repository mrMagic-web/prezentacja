import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ContentArea from "../ContentArea";

class PhotoLeft extends Component {
  render() {
    const { background } = this.props;
    return (
      <Grid columns="equal">
        <Grid.Column
          width={8}
          className="background"
          style={{ backgroundImage: `url(./image/${background})` }}
        />
        <Grid.Column width={8} verticalAlign="middle">
          <ContentArea {...this.props} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default PhotoLeft;
