import React, { Component } from "react";
import "./FullBackground.css";
import { Header, Icon } from "semantic-ui-react";

class FullBackground extends Component {
  render() {
    const { background, title, subtitle, icon } = this.props;
    return (
      <div className="full-background">
        <div
          className="background"
          style={{ backgroundImage: `url(./image/${background})` }}
        />
        <Header size="huge" className="header-text" icon>
          {icon ? <Icon name={icon} /> : null}
          {title}
          <Header.Subheader className="subheader" as="h2">
            {subtitle}
          </Header.Subheader>
        </Header>
      </div>
    );
  }
}

export default FullBackground;