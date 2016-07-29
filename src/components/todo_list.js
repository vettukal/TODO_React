import React, {Component} from 'react';
import TODOListItem from './todo_list_item';

class TODOList extends Component {
	constructor(props){
		super(props);
		this.state = { items : []};
	}

	onDoneClick(){
		console.log("Done is clicked, inside the todo_list");
	}

	render(){
    	// var createItem = function(item) {
     //  		return <li key={item.id}>{item.text} <button onClick={props.onDone(item)}>Done</button></li>;
    	// };

    	if(this.props.items !== undefined){
    		
    			return (
    				<ul> 
    				
    				{ this.props.items.map( (item) => { return <TODOListItem key={item.id} item={item} onDone={this.props.onDone}/>} ) }

    				</ul>
    				
    				);
    		
    	}	
    	else
    		return <ul><li>Nothing</li></ul>;
  	}

  	createItem(item) {
  		return <li key={item.id}>{item.text} <button>Done</button></li>;
  	}
}

export default TODOList;

// onclick={this.props.onDone(item)}