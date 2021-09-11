import Error404 from 'pages/Error404';
import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';
import { Route, Switch } from 'react-router';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/searchResult' component={SearchResult} />
      <Route component={Error404} />
    </Switch>
  );
};

export default MainRouter;
