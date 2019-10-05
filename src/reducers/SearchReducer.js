import * as actions from '../helpers/actionTypes';

const initState = {
    artists: [],
    searchTerm: '',
    albums : [],
    tracks: []
}

export default function (state=initState , action){
    switch(action.type){
        case actions.SEARCH_ARTISTS:{
            return {...state,artists: action.payload };
        }
        case actions.GET_ALBUMS:{
            return {...state,albums: action.payload };
        }
        case actions.GET_TRACKS:{
            return {...state,tracks: action.payload };
        }
        default:
            return state;
    
    }
}