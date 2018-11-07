import React from 'react';
import {
  Button,
} from 'react-bootstrap';
import styles from '../styles/overview_styles.css';

const PrivateDining = (props) => {
  if (!props) {
    return [];
  }
  if (props.privateDiningText !== 'NULL') {
    return (
      <div>
        <h3>Private Dining</h3>
        <p>
          {props.privateDiningText}
        </p>
        <Button
          styleName="styles.view_private_dining_details"
          bsStyle="default"
          bsSize="lg"
          type="button"
          onClick={() => alert('Feature not included')} /* eslint-disable-line */
        >
          View Private Dining Details
        </Button>
      </div>
    );
  }
  return [];
};

export default PrivateDining;
