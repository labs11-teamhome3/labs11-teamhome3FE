import React, { useState, useEffect } from 'react';

const Task = props => {
	const [completed, setCompleted] = useState(false);
	useEffect(_ => {
		setCompleted(props.task.completed);
	}, []);
	return (
		<div>
			<input
				type="checkbox"
				name="task"
				checked={completed}
				onClick={e => setCompleted(!completed)}
			/>
			<label htmlFor="task">{props.task.title}</label>
		</div>
	);
};

export default Task;
