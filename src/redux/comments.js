/**
 * Comments duck.
 */

import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

export const FETCH = createAction('comments/FETCH');

export default typeToReducer({
	[FETCH]: (state, action) => {
		return state;
	},
}, {
	comments: [],
	isFetching: false,
});