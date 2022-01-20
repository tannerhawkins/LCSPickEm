import React from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../components/Template/ScrollToTop";

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | LCS Pick'Em"
      defaultTitle="LCS Pick'Em"
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <div id="main">{props.children}</div>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "LCS Pick'Em",
};

export default Main;
