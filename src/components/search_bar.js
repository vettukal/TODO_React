import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = { term : ''};
    }
    
    render() {
        return (
            <div>
                <input onChange={(event) =>  this.setState( { term : event.target.value} )} />
                
            </div>
        );
        
    }
        
    onInputChange(event) {
         console.log(event.target.value);
    }    
}

//
//const SearchBar = () => {
//    return <input />;
//};

//var SearchBar = React.createClass({
//  render: () => {
//    return (
//      <input />
//    );
//  }
//});

export default SearchBar; 