import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import Home from "../components/Home";
import { Segment } from "semantic-ui-react";

const mapStateToProps = state => {
  const { artists , albums  , tracks} = state.SearchReducer;
  const {activeTrack} = state.TrackReducer
  return {
    artists,
    albums,
    tracks,
    activeTrack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchArtist: bindActionCreators(actions.searchArtist, dispatch),
    getAlbumsofArtist: bindActionCreators(actions.getAlbumsofArtist, dispatch),
    getTracksofAlbum: bindActionCreators(actions.getTracksofAlbum, dispatch),
    onPlay: bindActionCreators(actions.playTrack, dispatch),
    onSetTrack: bindActionCreators(actions.setTracks, dispatch)
  };
};
class HomePage extends React.Component {
  render() {
    return <Segment inverted>
      <Home {...this.props} />
    </Segment>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
