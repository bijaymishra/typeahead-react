import Autocomplete from "./main.js";
import ReactDOM from "react-dom";
import React from "react";
import PokemonClassnames from './pokemon-classnames';



const PokemonItemView = function({ option }) {

  return (
   <div key={option.id}>
        <img
          src={option.avatar_url}
          style={{
            height: '24px',
            marginRight: '10px',
            width: '24px',
          }}
        />
        <span>{option.login}</span>
      </div>
  );

} 

class MyApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allowNew: false,
      multiple: false,
      options: [],
      selected: undefined
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

// render one pokemon 
 
  onChange(query) {
    
    // you would normally do here your server access
    // we are delaying 1 second to see the spinner, because it's beautiful
    this.delayed && clearTimeout(this.delayed);
    this.delayed = setTimeout(() => {
      this.delayed = null;
      
        query = query.toLowerCase();
        fetch(`https://api.github.com/search/users?q=${query}`)
      .then(resp => resp.json())
      .then(json => this.setState({options: json.items})).then(this.refs.autocomplete.setItems(this.options.logon));
        
     
    }, 1000)
  }

  onSelect(item) {
    this.setState({
      selected: item
    });
    return item.cssClassName.replace('pkmn-', '');
  }

  render() {
    var selected = this.state.selected;
    return (
      <div>
        <Autocomplete 
          ref="autocomplete"
          ItemView={this.PokemonItemView} 
          onChange={this.onChange} 
          onSelect={this.onSelect}
        />
        { !selected? undefined :
          <div>
            <hr/>
            <h3>Selected Pokemon</h3>
            <PokemonItemView item={selected} />
          </div>
        }
      </div>
    )
  }

};

export default MyApp;