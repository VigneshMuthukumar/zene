import Request from '../helpers/Request';
import * as actions from '../helpers/actionTypes';

export function searchArtist(value){
    return dispatch => {
       return Request.get(`search?q=${value}&type=artist&limit=10`)
        .then(data => {
            let allArtists = data.data.artists.items;
            let artists = allArtists.map((obj) => {
                return {name:obj.name ,id:obj.id,images:obj.images}
            })
            dispatch ({
                type: actions.SEARCH_ARTISTS,
                payload : artists 
            })
        })
        .catch(err => {
            dispatch ({
                type: actions.SEARCH_ARTISTS,
                payload : [] 
            })
            console.log(err);
        })

    }
}
export function getAlbumsofArtist(artistId){
    return dispatch => {
       return Request.get(`artists/${artistId}/albums`)
        .then(data => {
            let allAlbums = data.data.items;
            let albums = allAlbums.map((obj) => {
                return {name:obj.name ,id:obj.id,images:obj.images, total_tracks : obj.total_tracks , release_date : obj.release_date}
            })
            dispatch ({
                type: actions.GET_ALBUMS,
                payload : albums 
            })
        })
        .catch(err => {
            dispatch ({
                type: actions.GET_ALBUMS,
                payload : [] 
            })
            console.log(err);
        })

    }
}
export function getTracksofAlbum(albumId){
    return dispatch => {
       return Request.get(`albums/${albumId}/tracks`)
        .then(data => {
            let allTracks = data.data.items;
            let tracks = allTracks.map((obj) => {
                return {name:obj.name ,id:obj.id,preview_url:obj.preview_url,artists:obj.artists}
            })
            dispatch ({
                type: actions.GET_TRACKS,
                payload : tracks 
            })
        })
        .catch(err => {
            dispatch ({
                type: actions.GET_TRACKS,
                payload : [] 
            })
            console.log(err);
        })

    }
}

export function setTracks(tracks) {
    return {
      type: actions.TRACKS_SET,
      tracks
    }
}
  
export function playTrack(track) {
    return {
      type: actions.TRACK_PLAY,
      track
    }
}
  
export function nextTrack(track) {
    return {
      type: actions.TRACK_NEXT,
      track
    }
}
  
export function prevTrack(track) {
    return {
      type: actions.TRACK_PREV,
      track
    }
}

export function login(access_token,refresh_token) {
    return dispatch => {
        localStorage.setItem('access_token',access_token);
        localStorage.setItem('refresh_token',refresh_token);
        dispatch ({
            type: actions.LOGIN,
            payload : {
                access_token,
            } 
        })    
    }
    
}

export function logout() {
    return dispatch => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      dispatch ({
        type: actions.LOGOUT,
        payload : {} 
    })
    }
  }