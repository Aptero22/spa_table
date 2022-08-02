import { Component } from "react";

import SearchPanel from "../searchPanel/searchPanel";
import SearchCheck from "../searchCheck/searchCheck";
import Table from "../table/table";
import data from'./users.json'; 

import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
			term: '',
			filter: '',
			check: false
		}
	}

	searchUser = (items, term, check) => {
		let result = items;

		result = result.filter(item => {
            return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1;
        })
		if (check) {
			let year = new Date().getFullYear();
			result = result.filter(item => {
				let item_year = new Date(item.birthday).getFullYear();
				
				return year - item_year > 18;
			})
		}
		return result
		
	}

	onCheckedUser = (check) => {
		this.setState({check: check});
	}

	onUpdateSearch = (term) => {
        this.setState({term: term});
    }

	
	render() {

		const {data, term, filter, check} = this.state;

		const visibleData = this.searchUser(data, term, check);

		return (
			<div className='app'>
				<div className="app-descr">
					<h1 className="app-descr__title">Тестовое задание</h1>
					<div className="app-descr__info">Таблица пользователей с возможностью сортировки</div>
				</div>

				<div className="app-search">
					<SearchPanel filter={filter} onUpdateSearch={this.onUpdateSearch}/>
					<SearchCheck filter={filter} onCheckedUser={this.onCheckedUser}/>
				</div>
				

				<Table data={visibleData} />

			</div>
		)
	}

	
}

export default App;