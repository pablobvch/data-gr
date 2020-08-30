import React from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const shouldRenderThirdDataTable = (comments) => comments.length > 0;

const renderThirdDataTableIfNeeded = (state, updateState) =>
  shouldRenderThirdDataTable(state.comments) ? (
    <DataTable
      columns={commentsColumns}
      data={state.comments}
      title={`Second table`}
    />
  ) : (
    false
  );

const shouldRenderSecondDataTable = (userIdClicked) => userIdClicked !== 0;

const renderSecondDataTableIfNeeded = (state, updateState) =>
  shouldRenderSecondDataTable(state.userIdClicked) ? (
    <DataTable
      columns={postsByUserIdColumns}
      data={getPostByUserIdClicked(state.posts, state.userIdClicked)}
      title={`Second table`}
    />
  ) : (
    false
  );

const onPostIdClickHandler = (state, updateState, id) => () => {
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
};

const onUserIdClickHandler = (state, updateState, userId) => () =>
  updateState((state) => ({ ...state, userIdClicked: userId, comments: [] }));

const getPostByUserIdClicked = (posts, userIdClicked) =>
  posts.filter((post) => post.userId === userIdClicked);

const getColumns = (state, updateState) => [
  {
    cell: (row) => (
      <div onClick={onUserIdClickHandler(state, updateState, row.userId)}>
        <Link to="#">{row.userId}</Link>
      </div>
    ),
    name: "userId",
    selector: "userId",
    width: "5%"
  },
  {
    cell: (row) => (
      <div onClick={onPostIdClickHandler(state, updateState, row.id)}>
        <Link to="#">{row.id}</Link>
      </div>
    ),
    name: "id",
    selector: "id",
    width: "5%"
  },
  { name: "title", selector: "title", width: "20%" },
  { name: "body", selector: "body", widhth: "70%" }
];

const postsByUserIdColumns = [
  { name: "userId", selector: "userId", width: "5%" },
  { name: "id", selector: "id", width: "5%" },
  { name: "title", selector: "title", width: "20%" },
  { name: "body", selector: "body", widhth: "70%" }
];

const commentsColumns = [
  { name: "postId", selector: "postId", width: "5%" },
  { name: "id", selector: "id", width: "5%" },
  { name: "name", selector: "name", width: "10%" },
  { name: "email", selector: "email", width: "10%" },
  { name: "body", selector: "body", width: "70%" }
];

const PostPageView = ({ state, updateState }) => (
  <Container>
    <DataTable
      columns={getColumns(state, updateState)}
      data={state.posts}
      pagination={true}
      title="Posts"
    />
    {renderSecondDataTableIfNeeded(state, updateState)}
    {renderThirdDataTableIfNeeded(state, updateState)}
  </Container>
);

export default PostPageView;