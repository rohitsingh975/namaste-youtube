import React from 'react';
import Comment from './Comment';
import CommentsList from './CommentsList';


const commentsData = [
  {
    name: "Rohit Singh",
    text: "First Comment, Lorem ipsum dolar sit amet",
    replies: []
  },
  {
    name: "Rohit Singh",
    text: "Second Comment, Lorem ipsum dolar sit amet",
    replies: [
      {
      name: "Rohit Singh",
      text: "First reply of second comment Nested Lorem ipsum dolar sit amet",
      replies: []
    },
    {
      name: "Rohit Singh",
      text: "Second reply of second commentLorem ipsum dolar sit amet, aafsdf fasfsdaf",
      replies: [
        {
          name: "Rohit Singh",
          text: "Nested Lorem ipsum dolar sit amet, aafsdf fasfsdaf",
          replies: []
        },
        {
          name: "Rohit Singh",
          text: "Nested Lorem ipsum dolar sit amet, aafsdf fasfsdaf",
          replies: []
        }
      ]
    }
  ]
  },
  {
    name: "Rohit Singh",
    text: "Third Comment, Lorem ipsum dolar sit amet",
    replies: []
  },
];
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text 2xl font-bold">Comments: </h1>
        <CommentsList comments={commentsData}/>      
    </div>
  )
}

export default CommentsContainer;