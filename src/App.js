import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Image from 'pages/image/image'
import Details from 'pages/details/detail'
import Form from 'pages/form/form'
import Navigation from 'components/Navigation'
import 'bootswatch/dist/lux/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mt-5">
      <Switch>
            <Route exact path = "/images" component = { Image }  />
            <Route path = "/images/details/:id" component = { Details }  />
            <Route path = "/images/new" component = { Form }  />
            <Redirect from="/" to="/images" />
      </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default App;
