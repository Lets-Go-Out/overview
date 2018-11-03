import React from 'react';

const Description = (props) => {
  const truncatedDescription = props.description.slice(0, 180);

  return (
    <div className="description row">
      <p className="description_paragraph col-sm-10 col-sm-offset-1 row">
        {
          props.showFullDescriptionState
            ? `${props.description} `
            : `${truncatedDescription}... `
        }
      </p>
      <div
        className="description_read_more col-sm-2 col-sm-offset-2"
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
