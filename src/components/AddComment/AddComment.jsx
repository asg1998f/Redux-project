import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../features/posts/postSlice";

const AddComment = ({ postId }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      dispatch(addComment({ postId, comment }));
      setComment(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <input
        type="text"
        value={comment}
        placeholder="Write a comment..."
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default AddComment;
