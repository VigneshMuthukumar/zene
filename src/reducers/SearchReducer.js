import * as actions from '../helpers/actionTypes';

const initState = {
    artists: [],
    searchTerm: ''
}

export default function (state=initState , action){
    switch(action.type){
        case actions.SEARCH_ARTISTS:{
            return {...state,artists: action.payload };
        }
        default:
            return state;
    
    }
}