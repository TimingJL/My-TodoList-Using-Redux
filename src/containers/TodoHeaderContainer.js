import React, {Component} from 'react'
import { connect } from 'react-redux';
import {dispatchAddTodo} from './action'

let value = '';
let inputNode = '';

const mapStateToProps = (state) => ({
	// 從 store 取得 todo state
	// todo: state.getIn(['todo', 'todo'])
});

const mapDispatchToProps = (dispatch) => ({
	
	// 當使用者在 input 輸入資料值即會觸發這個函數，發出 changeText action 並附上使用者輸入內容 event.target.value
	onChangeText: (event) => (
		value = event.target.value
	),
	// 當使用者按下送出時，發出 createTodo action 並清空 input 
	onCreateTodo: () => {
		if(inputNode.value){
			dispatch(dispatchAddTodo({ 
				text: value
			}))// go to reducer.js.
		}
		inputNode.value = '';
	}
});



class TodoHeaderContainer extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		const {
			onChangeText,
			onCreateTodo,
		} = this.props
		return (
			<div>
				<h1>Todo Header</h1>
				<input type="text" onChange={onChangeText} ref={(node) => inputNode = node} />
				<button onClick={onCreateTodo}>送出</button>
			</div>
		)
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(TodoHeaderContainer);