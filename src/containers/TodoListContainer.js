import React, {Component} from 'react'
import { connect } from 'react-redux';
import {dispatchCheckTodo, dispatchDeleteTodo} from './action'
import {
	STATE_COMPLETE,
	STATE_INCOMPLETE,
} from './constants';

const completeStyle = {
  textDecoration: 'line-through',
}

const mapStateToProps = (state) => ({
	dataSource: state.list,
})

const mapDispatchToProps = (dispatch) => ({
	onCheckTodo: (event) => {
		const id = parseInt(event.target.getAttribute('data-id'), 10);
		dispatch(dispatchCheckTodo({ 
			id: id
		}))
	},

	onDeleteTodo: (event) => {
		const id = parseInt(event.target.getAttribute('data-id'), 10);
		console.log('delete')
		dispatch(dispatchDeleteTodo({ 
			id: id
		}))
	},
});


class TodoListContainer extends Component{

	render(){
		const {
			dataSource,
			onCheckTodo,
			onDeleteTodo,
		} = this.props
		return (
			<ul>
				{dataSource.map((item)=>{
					return(
					  <li id={item.id} key={item.id}>
						{
							item.state === STATE_COMPLETE?
							<span style={completeStyle}>{item.value.text}</span>:
							<span>{item.value.text}</span>
						}
					  	<button data-id={item.id} onClick={onCheckTodo}>Check</button>
					  	<button data-id={item.id} onClick={onDeleteTodo}>Delete</button>
					  </li>
					)
				})}
			</ul>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);