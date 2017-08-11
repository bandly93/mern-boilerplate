import React, { Component} from "react";
import ReactDOM from "react-dom";

class List extends Component{
	render(){

		const languages = ['Java','Javascript','Python','Ruby','C++'];

		return(
			<ul>
				{
					languages.map(language => { return <li key = {language}> {language} </li>})
				}
			</ul>
		)
	}
}

ReactDOM.render(
	<List />,
	document.getElementById('app')
);
