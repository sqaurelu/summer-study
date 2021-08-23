import './App.css';
import { Route } from 'react-router-dom';
import Layout from './styles/Layout';
import { LoginPage, SignUpPage, FeedPage } from './pages';
import Logo from './components/Logo';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<Layout>
			<GlobalStyles />
			<Logo>로고자리</Logo>
			<Route path='/login' exact={true} component={LoginPage} />
			<Route path='/signup' component={SignUpPage} />
			<Route path='/feed' component={FeedPage} />
		</Layout>
	);
}

export default App;
