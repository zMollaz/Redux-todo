import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckBoxClick = () => {
		dispatch(toggleComplete({id, completed: !completed}))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onClick={handleCheckBoxClick} checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
