import React /* , { useState } */ from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './styles/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { MainPage, LoginPage, SignUpPage, FeedPage } from './pages';
import NotFound from './pages/Error/NotFound';
// import { signIn } from './services/auth';
// import AuthRoute from './services/AuthRoute';

function App() {
    // const [user, setUser] = useState(null);
    // // 사용자 존재 여부
    // const authenticated = Boolean(user);

    // const login = ({ email, password }) => setUser(signIn({ email, password }));
    // const logout = () => setUser(null);

    return (
        <Layout>
            <GlobalStyles />
            <Switch>
                <Route path="/" exact={true} component={MainPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                {/* <AuthRoute
					authenticated={authenticated}
					path='/feed'
					render={props => <FeedPage user={user} {...props}/>}
				/> */}
                <Route path="/feed" component={FeedPage} />
                <Route
                    render={({ location }) => <NotFound location={location} />}
                />
            </Switch>
        </Layout>
    );
}

export default App;
