import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './styles/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { MainPage, LoginPage, SignUpPage, FeedPage } from './pages';
import NotFound from './pages/Error/NotFound';

function App() {
	return (
		<Layout>
			<GlobalStyles />
			<Switch>
				<Route path='/' exact={true} component={MainPage} />
				<Route path='/login' component={LoginPage} />
				<Route path='/signup' component={SignUpPage} />
				<Route path='/feed' component={FeedPage} />
				<Route
					render={({ location }) => (
						<NotFound location={location}/>
					)}
				/>
			</Switch>
		</Layout>
	);
}

export default App;
