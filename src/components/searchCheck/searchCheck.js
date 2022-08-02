import { Component } from 'react';

import './searchCheck.scss';

class SearchCheck extends Component{
    constructor(props){
        super(props)
        this.state = {
            check: ''
        }
        
    }

    onCheckedUser = (e) => {
        const check = e.target.checked;
        this.setState({check});
        this.props.onCheckedUser(check)
    }

    render() {
        return (
            <>
                <div className="check">
                    <div className="check-text">Выбрать тех, кому 18 лет и более</div>
                    <input
                        type="checkbox"
                        className="check-input"
                        value={this.state.check}
                        onChange={this.onCheckedUser}
                        />
                </div>
            

            </>
        )
    }
}

export default SearchCheck;