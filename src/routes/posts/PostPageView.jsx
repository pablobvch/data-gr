import React from "react";
import DataTable from "react-data-table-component";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const shouldRenderSecondDataTable = (userIdClicked) => userIdClicked !== 0;

const renderSecondDataTableIfNeeded = (state, updateState) =>
  shouldRenderSecondDataTable(state.userIdClicked) ? (
    <DataTable
      columns={getColumns(state, updateState)}
      data={getPostByUserIdClicked(state.posts, state.userIdClicked)}
      title={`Posts for ${state.userIdClicked}`}
    />
  ) : (
    false
  );

const onClickHandler = (state, updateState, userId) => () =>
  updateState((state) => ({ ...state, userIdClicked: userId }));

const getPostByUserIdClicked = (posts, userIdClicked) =>
  posts.filter((post) => post.userId === userIdClicked);

const getColumns = (state, updateState) => [
  {
    cell: (row) => (
      <div onClick={onClickHandler(state, updateState, row.userId)}>
        <Link to="#">{row.userId}</Link>
      </div>
    ),
    name: "userId",
    selector: "userId",
    width: "5%"
  },
  { name: "id", selector: "id", width: "5%" },
  { name: "title", selector: "title", width: "20%" },
  { name: "body", selector: "body", widhth: "70%" }
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
  </Container>
);

export default PostPageView;
