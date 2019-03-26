import React, { useState, useEffect } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import styled from 'styled-components';
import { Progress } from 'reactstrap';

import Task from '../TodoTask/Task';

const styles = theme => ({
	fab: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	},
	smallBtn: {
		width: '20px',
		height: '20px',
		'min-height': '0px'
	}
});

const FlexDiv = styled.div`
	display: flex;
`;

function TodoList(props) {
	const [collapsed, setCollapsed] = useState(false);
	const [tasks, setTasks] = useState([]);
	useEffect(_ => {
		setTasks(props.list.tasks);
	}, []);
	const { classes } = props;
	const ToggleTask = id => {
		setTasks(
			tasks.map(task => {
				if (task.id === id) {
					return { ...task, completed: !task.completed };
				} else {
					return task;
				}
			})
		);
	};
	return (
		<div>
			<FlexDiv>
				<Fab
					color="default"
					aria-label="Edit"
					className={classNames(classes.smallBtn)}
					onClick={e => setCollapsed(!collapsed)}
				>
					-
				</Fab>
				<h3>{props.list.title}</h3>
			</FlexDiv>
			<Progress
				value={tasks.filter(task => task.completed).length}
				max={tasks.length}
			/>
			<Collapse isOpen={collapsed}>
				<Card>
					<CardBody>
						{tasks.map(task => (
							<Task
								ToggleTask={ToggleTask}
								task={task}
								key={task.id}
								completed={task.completed}
							/>
						))}
					</CardBody>
				</Card>
			</Collapse>
		</div>
	);
}

export default withStyles(styles)(TodoList);
