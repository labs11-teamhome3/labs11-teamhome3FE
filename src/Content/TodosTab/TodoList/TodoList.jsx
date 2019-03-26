import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import styled from 'styled-components';

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
	const { classes } = props;
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
			<Collapse isOpen={collapsed}>
				<Card>
					<CardBody>
						{props.list.tasks.map(task => (
							<Task task={task} key={task.id} />
						))}
					</CardBody>
				</Card>
			</Collapse>
		</div>
	);
}

export default withStyles(styles)(TodoList);
