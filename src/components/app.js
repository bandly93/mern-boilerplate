import LoginBox from "../components/login_box";
import NavBar from "../components/nav_bar";
import Home from "../views/home";
import Login from "../views/login";
import Register from "../views/register";
import React , { Component } from "react";
const ReactRouter= require("react-router-dom");
const Router = ReactRouter.BrowserRouter;
const Switch = ReactRouter.Switch;
const Route = ReactRouter.Route;
const IndexRedirect = ReactRouter.indexRedirect;

class App extends Component {
	render(){
		return(
			<Router>
				<div>
					<NavBar />
					<Switch>
						
						<Route exact path = '/' component = {Home}/>
						<Route path = '/login' component = {Login}/>
						<Route path = '/register' component = {Register}/>
					</Switch>
				</div>
			</Router>	
		)
	}
}

export default App;