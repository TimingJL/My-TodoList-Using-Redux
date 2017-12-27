import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_TODO,
} from './constants';

export const dispatchAddTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const dispatchCheckTodo = (payload) => ({
  type: CHECK_TODO,
  payload,
});

export const dispatchDeleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});