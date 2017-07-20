const React = require("react");
const { render } = require("react-dom");
const { AppContainer } = require("./components/app");

render(
  <AppContainer />,
  document.getElementById("app")
);
