import React from 'react';
import $ from 'jquery';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';

const Description = (props) => {
  const truncatedDescription = props.description.slice(0, 180);
  return (
    <div styleName="bs.row styles.restaurant_description">
      <div styleName="bs.col-sm-10 bs.col-md-offset-1">
        <p styleName="styles.description_paragraph">
          {
            props.showFullDescriptionState
              ? `${props.description} `
              : `${truncatedDescription}... `
          }
        </p>
      </div>
      <div
        styleName="styles.description_read_more bs.col-sm-2 bs.col-sm-offset-2"
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
      </div>
    </div>
  );
};

export default Description;
