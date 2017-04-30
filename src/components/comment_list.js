import React from 'react';
import uuid from 'uuid/V4';
import { connect } from 'react-redux';

const CommentList = props => {
  const list = props.comments.map(comment => {
    return <li key={uuid()}>{comment}</li>;
  });

  return (
    <ul className="comment-list">
      {list}
    </ul>
  );
};

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
