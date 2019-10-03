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