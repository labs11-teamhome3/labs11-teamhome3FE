import React from 'react';

import TodoList from './TodoList';

const TodoLists = props => {
	const lists = [
		{
			id: 1,
			title: 'Todo List 1',
			tasks: [
				{
					id: 1,
					title: 'Task 1',
					completed: false
				},
				{
					id: 2,
					title: 'Task 2',
					completed: true
				},
				{
					id: 3,
					title: 'Task 3',
					completed: false
				}
			]
		},
		{
			id: 2,
			title: 'Todo List 2',
			tasks: [
				{
					id: 4,
					title: 'Task 1',
					completed: false
				},
				{
					id: 5,
					title: 'Task 2',
					completed: false
				},
				{
					id: 6,
					title: 'Task 3',
					completed: false
				}
			]
		}
	];
	return (
		<div>
			{lists.map(list => (
				<TodoList list={list} key={list.id} />
			))}
		</div>
	);
};

export default TodoLists;
