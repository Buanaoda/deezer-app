import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Favorites from '../components/Favorites';
import { GlobalStyle, MainContainer, AppTitle, Header } from '../styles/styles';

const AppRouter = () => (
  <BrowserRouter>
    <GlobalStyle whiteColor />
    <Header>
      <AppTitle>Music App.</AppTitle>
    </Header>
    <MainContainer>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/favorites" component={Favorites} exact={true} />
      </Switch>
    </MainContainer>
  </BrowserRouter>
);

export default AppRouter;
