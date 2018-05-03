import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => <div style={styles} />;

render(<App />, document.getElementById("root"));
