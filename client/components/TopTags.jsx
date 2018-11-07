import React from 'react';
import {
  Row, Col, Button,
} from 'react-bootstrap';
import styles from '../styles/overview_styles.css';

const TopTags = (props) => {
  const topTagsJsx = [];

  topTagsJsx.push((
    <Col md={3}>
      <Button key={0} bsStyle="default" styleName="styles.top_tag">{` ${props.tags[0]}`}</Button>
    </Col>
  ));

  for (let i = 1; i < 3 && i < props.tags.length; i += 1) {
    topTagsJsx.push((
      <Col md={3}>
        <Button key={i} bsStyle="default" styleName="styles.top_tag">{`${props.tags[i]}`}</Button>
      </Col>
    ));
  }

  return (
    <Row>
      <Col md={10} mdOffset={1}>
        <h3>
          <Col md={3} lg={2}>Top Tags:</Col>
          {topTagsJsx}
        </h3>
      </Col>
    </Row>
  );
};

export default TopTags;
