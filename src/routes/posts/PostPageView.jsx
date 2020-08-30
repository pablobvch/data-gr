import React from "react";
import DataTable from "react-data-table-component";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const shouldRenderThirdDataTable = (comments) => comments.length > 0;

const renderThirdDataTableIfNeeded = (state, updateState) =>
  shouldRenderThirdDataTable(state.comments) ? (
    <DataTable
      columns={commentsColumns}
      data={state.comments}
      title={`Comments`}
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
      title={`Posts`}
    />
  ) : (
    false
  );

const getPostByUserIdClicked = (posts, userIdClicked) =>
  posts.filter((post) => post.userId === userIdClicked);

const getColumns = (
  state,
  updateState,
  onUserIdClickHandler,
  onPostIdClickHandler
) => [
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
  {
    cell: (row) => <div>{row.title}</div>,
    name: "title",
    selector: "title",
    width: "20%"
  },
  {
    cell: (row) => <div>{row.body}</div>,
    name: "body",
    selector: "body",
    widhth: "70%"
  }
];

const postsByUserIdColumns = [
  { name: "userId", selector: "userId", width: "5%" },
  { name: "id", selector: "id", width: "5%" },
  {
    cell: (row) => <div>{row.title}</div>,
    name: "title",
    selector: "title",
    width: "20%"
  },
  {
    cell: (row) => <div>{row.body}</div>,
    name: "body",
    selector: "body",
    widhth: "70%"
  }
];

const commentsColumns = [
  { name: "postId", selector: "postId", width: "5%" },
  { name: "id", selector: "id", width: "5%" },
  {
    cell: (row) => <div>{row.name}</div>,
    name: "name",
    selector: "name",
    width: "30%"
  },
  { name: "email", selector: "email", width: "20%" },
  {
    cell: (row) => <div>{row.body}</div>,
    name: "body",
    selector: "body",
    width: "40%"
  }
];

const PostPageView = ({
  state,
  updateState,
  onUserIdClickHandler,
  onPostIdClickHandler
}) => (
  <Container>
    <DataTable
      columns={getColumns(
        state,
        updateState,
        onUserIdClickHandler,
        onPostIdClickHandler
      )}
      data={state.posts}
      pagination={true}
      title="Posts"
    />
    {renderSecondDataTableIfNeeded(state, updateState)}
    {renderThirdDataTableIfNeeded(state, updateState)}
  </Container>
);

export default PostPageView;
