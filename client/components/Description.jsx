import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap/lib';
import '../styles/overview_styles.css';

const Description = (props) => {
  const truncatedDescription = props.description.slice(0, 180);
  return (
    <Row>
      <Col sm={10} smOffset={1}>
        <p styleName="description_paragraph">
          {
            props.showFullDescriptionState
              ? `${props.description} `
              : `${truncatedDescription}... `
          }
        </p>
      </Col>
      <Col
        styleName="description_read_more"
        sm={2}
        smOffset={2}
        onClick={props.showFullDescription}
        display={
          props.showFullDescriptionState
            ? 'none'
            : 'flex'
        }
      >
        {
          `+ ${
            props.showFullDescriptionState
              ? 'Read Less'
              : 'Read More'
          }`
        }
      </Col>
    </Row>
  );
};

export default Description;
