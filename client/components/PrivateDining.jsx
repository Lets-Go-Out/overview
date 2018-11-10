import React from 'react';
import $ from 'jquery';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';

const PrivateDining = (props) => {
  if (!props) {
    return [];
  }
  if (props.privateDiningText !== 'NULL') {
    return (
      <div>
        <div styleName="styles.private_dining_header">Private Dining</div>
        <p>
          {props.privateDiningText}
        </p>
        <a
          role="button"
          styleName="styles.view_private_dining_details bs.btn bs.btn-default bs.btn-lg"
          type="button"
          onClick={() => alert('Feature not included')} /* eslint-disable-line */
        >
          View Private Dining Details
        </a>
      </div>
    );
  }
  return [];
};

export default PrivateDining;
