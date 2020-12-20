import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home/Home';
import Boards from './pages/Boards/Boards';
import Dashboard from './pages/Dashboard/Dashboard';
import Signup from './pages/Signin/Signup';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';


export default class Main extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>


						<Route exact path="/" component={Home} />
						<Route path="/signup" exact component={Signup} />
						<Route path="/login" exact component={Login} />
						<Route path="/boards" exact component={Boards} />
						<Route path="/:board_id/dashboard" exact component={Dashboard} />
						<Route path="/admin" exact component={Admin} />



					</Switch>
				</Router>
			</div>
		);
	}
}