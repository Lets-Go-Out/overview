import React from 'react';
import $ from 'jquery';
import bs from 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/overview_styles.css';

const TopTags = (props) => {
  const topTagsJsx = [];

  topTagsJsx.push((
    <div styleName="bs.col-md-3 bs.col-sm-4 bs.col-xs-4 bs.col-sm-offset-0">
      <a role="button" key={0} type="button" styleName="styles.top_tag bs.btn bs.btn-default">{` ${props.tags[0]}`}</a>
    </div>
  ));

  for (let i = 1; i < 3 && i < props.tags.length; i += 1) {
    topTagsJsx.push((
      <div styleName="bs.col-md-3 bs.col-sm-4 bs.col-xs-4 bs.col-sm-offset-0">
        <a role="button" type="button" key={i} styleName="styles.top_tag bs.btn bs.btn-default">{`${props.tags[i]}`}</a>
      </div>
    ));
  }

  return (
    <div styleName="bs.row styles.top_tags_row">
      <div styleName="bs.col-sm-10 bs.col-sm-offset-1">
        <div styleName="styles.top_tag_heading">
          <div styleName="bs.col-md-2 bs.col-sm-12">Top Tags:</div>
        </div>
        {topTagsJsx}
      </div>
    </div>
  );
};

export default TopTags;
