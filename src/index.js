import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import SearchBar from './components/search_bar'; 
//import YTSearch from 'youtube-api-search';
//import VideoList from './components/video_list';
import TODOList from './components/todo_list';
const API_KEY = 'AIzaSyA3I1bHe1zfTtTUslLx8DGxjwwds5xvVSI';


class App extends Component {
  constructor(props) {
  	super(props);
    this.state = { items : [] , text : ''};
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  }

  deleteElem(item){
  	console.log("deleting the item");
  	console.log("Item selected is: "+item.text);
  	console.log("deleteElem this access: "+this.state.items);
  	let delindex = this.state.items.indexOf(item);
  	let arr = this.state.items;
  	arr.splice(delindex,1);
  	console.log("deleteElem: delindex: "+delindex);
  	this.setState({items : arr});
  	
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TODOList items={this.state.items} onDone={ this.deleteElem.bind(this) }/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.onChange.bind(this)} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


// (item) => console.log("onDone button is clicked.")
 