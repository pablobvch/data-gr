export default [
  {
    path: "/posts",
    loader: () => import("./PostsPage"),
    isPrivate: false,
    exact: false
  }
];
