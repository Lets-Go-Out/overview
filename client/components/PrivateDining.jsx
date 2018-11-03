import React from 'react';

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
        <button
          className="btn btn-default btn-lg"
          type="button"
          onClick={() => alert('Feature not included')} /* eslint-disable-line */
        >
          View Private Dining Details
        </button>
      </div>
    );
  }
  return [];
};

export default PrivateDining;
