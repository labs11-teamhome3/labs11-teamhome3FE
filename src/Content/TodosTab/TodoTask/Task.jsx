import React, { useState, useEffect } from 'react';

const Task = props => {
	return (
		<div>
			<input
				type="checkbox"
				name="task"
				checked={props.completed}
				onClick={e => props.ToggleTask(props.task.id)}
			/>
			<label htmlFor="task">{props.task.title}</label>
		</div>
	);
};

export default Task;
