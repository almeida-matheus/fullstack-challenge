import {
	combineReducers,
} from 'redux';
import participationReducer from './participation';

const rootReducer = combineReducers({
	participations: participationReducer
});

export default rootReducer;
