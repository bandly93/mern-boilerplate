import React, { Component } from "react";
import { NavLink } from "react-router-dom"

class NavBar extends Component{
	render(){
		return(
			<div className = "navigation">
				<ul>
					<li><NavLink to = "/home"> Home </NavLink></li>
					<li><NavLink to = "/register"> Register </NavLink></li>
					<li><NavLink to = "/login"> Login </NavLink></li>
				</ul>
			</div>
		)
	}
}

export default NavBar;