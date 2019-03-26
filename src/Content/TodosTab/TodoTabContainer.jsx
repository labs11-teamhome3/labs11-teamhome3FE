import React from 'react';

// ---------------- Styles ---------------------- //
import mediaQueryFor from '../../_global_styles/responsive_querie';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../colorVariables';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { MenuItem } from '@material-ui/core';

// ---------------- Components ---------------------- //
import TodoLists from './TodoList/TodoLists';

const TodoContainer = styled.div`
	padding: 10px;
	padding-bottom: 20px;
	border: 2px solid #4a4550;
	position: relative;
	margin: 0;
	padding-top: 20px;
	form {
		height: 50px;
		select {
			margin-left: 10px;
		}
		option {
			height: 50px;
		}
	}

	${mediaQueryFor.mdDevice`
		margin-bottom: 10px;
		width: 100%;
	`};
`;

const ContainerTitle = styled.div`
	position: absolute;
	width: 150px;
	height: 40px;
	text-align: center;
	top: -15px;
	left: 20px;
	background-color: #5a5560;

	p {
		color: white;
		font-size: 18px;
		letter-spacing: 1px;
	}
`;

const MainContainer = styled.div`
	width: 96%;
	margin: 10px auto;
	display: flex;
	flex-direction: column;
`;

const TodoTabContainer = props => {
	return (
		<MainContainer>
			<TodoContainer>
				<ContainerTitle>
					<p>TODOS</p>
				</ContainerTitle>
				<TodoLists />
			</TodoContainer>
		</MainContainer>
	);
};

export default TodoTabContainer;
