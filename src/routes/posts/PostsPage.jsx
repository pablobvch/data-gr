import React, { useState, useEffect } from "react";
import PostPageView from "./PostPageView";
import axios from "axios";

const PostsPage = (props) => {
  const [state, updateState] = useState({
    posts: [],
    userIdClicked: 0
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );

      updateState((state) => ({ ...state, posts: response.data }));
    }
    fetchData();
  }, []);

  return <PostPageView {...{ state, updateState }} />;
};

export default PostsPage;
