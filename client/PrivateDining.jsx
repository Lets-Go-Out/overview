import React from 'react';

const PrivateDining = (props) => {
  if (!props) {
    return [];
  }
  console.log(props.pri);
  return (
    <div>
      <h3>Private Dining</h3>
      <p>
        {props.privateDiningText}
      </p>
      <button type="button" onClick={() => alert('Feature not included')}>View Private Dining Details</button> {/* eslint-disable-line */}
    </div>
  );
};

export default PrivateDining;
