import './App.css';
import { Route } from 'react-router-dom';
import Layout from './styles/Layout';
import { LoginPage, SignUpPage, FeedPage } from './pages';
import GlobalStyles from './styles/GlobalStyles';
import MainPage from './pages/Main';

function App() {
	return (
		<Layout>
			<GlobalStyles />
			<Route path='/' exact={true} component={MainPage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/signup' component={SignUpPage} />
			<Route path='/feed' component={FeedPage} />
			{/* 이상한 페이지 갔을 때 에러창 */}
		</Layout>
	);
}

export default App;
