import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'; */


function Length(props){
var num;
num=140-props.str.length;
return(num);
}


class Tweet extends Component{

	constructor(props){
		super(props);
		this.state={string:'enter something'};
		this.handleChange=this.handleChange.bind(this);

	}

	handleChange(event){
		this.setState({string:event.target.value});
	}

	
	render(){
		var string=this.state.string;
	
  return (
  	<div>
  	<form>
  	<label>
  	Hey, type something over here..
  	<br/>
  	<textarea value={this.state.string} onChange={this.handleChange} maxLength="140"/>
  	</label>
  	<Length str={string} />
  	<input type="submit" value="Submit" />
  	</form>

  	</div>
  );
  }
}


export default Tweet;
