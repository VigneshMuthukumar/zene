import * as actions from '../helpers/actionTypes';

const initState = {
    tracks: [],
    activeTrack: null
}

export default function (state=initState , action){
    switch (action.type) {
        case actions.TRACKS_SET:{
            const {tracks} = action
            return { ...state, tracks }
        }
        case actions.TRACK_PLAY:{
            const {track} = action
            return { ...state, activeTrack: track }
        }
        case actions.TRACK_NEXT:{
            const {track} = action
            const activeTrackIndex = state.tracks.findIndex((e) => {return e === track})
            const nextTrack = (activeTrackIndex + 1 < state.tracks.length) ? state.tracks[activeTrackIndex + 1] : null
            return { ...state, activeTrack: nextTrack }
        }
        case actions.TRACK_PREV:{
            const {track} = action
            const activeTrackIndex = state.tracks.findIndex((e) => {return e === track})
            const prevTrack = (activeTrackIndex - 1 >= 0) ? state.tracks[activeTrackIndex - 1] : null
            return { ...state, activeTrack: prevTrack }
        }
        default:
            return state;
      }
}