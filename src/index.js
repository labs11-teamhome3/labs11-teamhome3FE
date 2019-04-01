import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const URI =
	process.env.NODE_ENV === 'production'
		? 'https://labs-manaje.herokuapp.com/graphql'
		: 'https://manaje-be-8de8017c47.herokuapp.com/labs11-teamhome3BE-refactor/dev/graphql/';

console.log(URI);

const client = new ApolloClient({
	uri: URI,
	request: operation => {
		operation.setContext(context => ({
			headers: {
				...context.headers,
				authorization: localStorage.getItem('token')
			}
		}));
	}
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
