import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
const ContentArea = props => {
  return (
    <div>
      {props.icon ? (
        <Icon name={props.icon} className="props.icon" size="huge" />
      ) : null}
      <Header
        textAlign="center"
        size="huge"
        className="header full"
        content={props.title}
      />
      <h2 className="subheader">{props.subtitle}</h2>
      {props.text ? <p className="full">{props.text}</p> : null}
      {props.list ? (
        <ul className="full">
          {props.list.map((item, i) => (
            <li key={`list-${props.slideNumber}-${i}`}>{item}</li>
          ))}
        </ul>
      ) : null}
      {props.code ? (
        <Segment inverted>
          {props.code.map((item, i) => (
            <code className="full" key={`code-${props.slideNumber}-${i}`}>
              {item}
              <br />
            </code>
          ))}
        </Segment>
      ) : null}
      {props.commentedcode ? (
        <Segment className="commented-code" inverted>
          {props.commentedcode.map((item, i) => (
            <div key={`commentedcode-${props.slideNumber}-${i}`}>
              <span>{item.comment}</span>
              <br />
              <code className="full">
                {item.code.map(line => (
                  <div>`${line}`</div>
                ))}
                <br />
                <br />
              </code>
            </div>
          ))}
        </Segment>
      ) : null}
      {props.link ? (
        <a className="full link" href={props.link.url}>
          {props.link.text}
        </a>
      ) : null}
    </div>
  );
};

export default ContentArea;
