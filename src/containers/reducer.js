import {
	ADD_TODO,
	CHECK_TODO,
	DELETE_TODO,

	STATE_COMPLETE,
	STATE_INCOMPLETE,
} from './constants';

const defaultState =  {
	list: [],
};

let id = 0;

export default (state = defaultState, action) => {
	switch (action.type) {
		case ADD_TODO:
			const item = {
				id,
				value: action.payload,
				state: STATE_INCOMPLETE,
			};
			id += 1;
			return {
				list: [...state.list, item],
			};  
		case CHECK_TODO:
			return {
				list: state.list.map((item)=>{
					console.log()
					if(item.id === action.payload.id){
						if(item.state === STATE_INCOMPLETE){
							item.state = STATE_COMPLETE;
						}else{
							item.state = STATE_INCOMPLETE;
						}
					}
					return item;
				})
			}; 
		case DELETE_TODO:
			return {
				list: state.list.filter((item) => item.id !== action.payload.id),
			}
		default:
			return state;
  }
}