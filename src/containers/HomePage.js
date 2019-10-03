import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import Home from "../components/Home";

const mapStateToProps = state => {
  const { artists } = state.SearchReducer;
  return {
    artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchArtist: bindActionCreators(actions.searchArtist, dispatch)
  };
};
class HomePage extends React.Component {
  render() {
    return <Home {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
