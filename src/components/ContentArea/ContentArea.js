import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
const ContentArea = props => {
  return (
    <div>
      {props.icon ? (
        <Icon name={props.icon} className="props.icon" size="huge" />
      ) : null}
      <Header
        textAlign="left"
        size="huge"
        className="header full"
        content={props.title}
        subheader={props.subtitle}
      />
      {props.text ? <p className="full">{props.text}</p> : null}
      {props.list ? (
        <ul className="full">
          {props.list.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      ) : null}
      {props.code ? (
        <Segment inverted>
          {props.code.map(item => (
            <p>
              <code className="full">{JSON.stringify(item)}</code>
            </p>
          ))}
        </Segment>
      ) : null}
      {props.link ? (
        <a className="full" href={props.link.url}>
          {props.link.text}
        </a>
      ) : null}
    </div>
  );
};

export default ContentArea;
