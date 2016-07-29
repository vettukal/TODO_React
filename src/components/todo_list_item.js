import React, {Component} from 'react';

class TODOListItem extends Component {
	constructor(props){
		super(props);
	}

	render(){

		return <li key={this.props.item.id}>{this.props.item.text} <button onClick={ () => {this.props.onDone(this.props.item)} }>Done</button></li>;
	}

}

export default TODOListItem;