import React, { useState, useEffect } from "react";
import PostPageView from "./PostPageView";
import axios from "axios";

const getHandlers = (state, updateState) => ({
  onUserIdClickHandler: (state, userId) => () =>
    updateState((state) => ({ ...state, userIdClicked: userId, comments: [] })),
  onPostIdClickHandler: (state, id) => () => {
    async function fetchData() {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );

      updateState((state) => ({
        ...state,
        comments: response.data,
        userIdClicked: 0
      }));
    }
    fetchData();
  }
});

const initialState = {
  comments: [],
  posts: [],
  userIdClicked: 0
};

const PostsPage = (props) => {
  const [state, updateState] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );

      updateState((state) => ({ ...state, posts: response.data }));
    }
    fetchData();
  }, []);

  return (
    <PostPageView
      {...{ state, updateState }}
      {...getHandlers(state, updateState)}
    />
  );
};

export default PostsPage;
