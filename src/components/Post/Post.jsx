import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { like, unlike } from "../../features/posts/postSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./Post.scss";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import zorro from "../../assets/fox-7017260_1280.jpg"
import AddComment from "../AddComment/AddComment";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState(user?.postIds);

  const userPostsWithLikes = () => {
    const postsUserLogged = posts.filter((post) =>
      user?.postIds?.includes(post._id)
    );
    setUserPosts(postsUserLogged);
  };

  useEffect(() => {
    userPostsWithLikes();
  }, [like, unlike, posts]);

  if (isLoading) {
    return <p>Waiting posts...</p>;
  }

  const postsToPrint =
    window.location.pathname == "/profile" ? userPosts : posts;

  const post = postsToPrint.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?._id);

    return (
      <Card
        key={post._id}
        hoverable
        style={{
          width: 300,
          margin:"10px"
        }}
        cover={
        <Link to={"/postDetail/" + post._id}>
            <img
            alt="img"
            src={zorro}
            className="zorro"
          />
        </Link>
        }
      >
        <Link to={"/postDetail/"+post._id}>        
            <Meta title={post.title} />
        </Link>
        Likes: {post.likes?.length}
        {user ? (
          <>
            {isAlreadyLiked ? (
              <HeartFilled
                className="heart"
                onClick={() => dispatch(unlike(post._id))}
              />
            ) : (
              <HeartOutlined onClick={() => dispatch(like(post._id))} />
            )}
          </>
        ) : (
          <HeartOutlined onClick={() => navigate("/login")} />
        )}
         <div className="comments-section">
              <h4>Comments:</h4>
              {post.comments && post.comments.length > 0 ? (
                post.comments.map((comment, index) => (
                  <p key={index} className="comment">{comment}</p>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
              {user && <AddComment postId={post._id} />}
            </div>
      </Card>
    );
  });
  return <div>Posts: {post}</div>;
};

export default Post;