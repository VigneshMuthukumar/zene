import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../actions'
import Player from '../components/Player';

const mapStateToProps = (state) => {
    const {activeTrack} = state.TrackReducer
    return {
    activeTrack
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextTrack: bindActionCreators(actions.nextTrack , dispatch),
    onPrevTrack: bindActionCreators(actions.prevTrack , dispatch)
  }
}
 class PlayerContainer extends React.Component{
    render(){
        return ( <Player {...this.props}/>);
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);