import React from 'react';
import Comment from './Comment';

const CommentsList = ({comments}) => {
  return comments.map((comment,index) => (
    //Don't use index as key
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
};

export default CommentsList;