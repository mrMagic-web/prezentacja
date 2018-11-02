import React, { Component } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import "./PhotoLeft.css";

class PhotoLeft extends Component {
  render() {
    const { background, title, subtitle, icon } = this.props;
    return (
      <Grid columns="equal">
        <Grid.Column
          width={8}
          className="background"
          style={{ backgroundImage: `url(./image/${background})` }}
        />
        <Grid.Column width={8} verticalAlign="middle">
          <Header
            size="huge"
            className="header full text-left"
            icon
            content={title}
            subheader={subtitle}
          >
            {icon ? <Icon name={icon} /> : null}
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default PhotoLeft;
