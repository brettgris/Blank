import { combineReducers } from 'redux';

/***** SCORING *****/

import {ADD_SCORE} from '../actions/actions';

const scoring = function(state=0,action){
	switch(action.type){
		case ADD_SCORE:
			return state + action.payload;
		default:
			return state
	}
}


/***** COMBINE *****/

export default combineReducers({
  'score': scoring,
});
