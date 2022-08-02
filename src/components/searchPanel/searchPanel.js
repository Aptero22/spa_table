import { Component } from 'react';

import './searchPanel.scss';

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            term:''
        }
        
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                type="search"
                className="search-panel__input"
                placeholder="Поиск"
                value={this.state.term}
                onChange={this.onUpdateSearch}
                />
        )
    }
}

export default SearchPanel;