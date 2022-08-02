import { Component } from 'react';

import './table.scss';

const sortOptions = {
	birthday: {
		up: {
			fn: (a, b) => {
				if (a.birthday > b.birthday) {
					return 1;
				  }
				  if (a.birthday < b.birthday) {
					return -1;
				  }
				  return 0;
			}
		},
		down: {
			fn: (a, b) => {
				if (a.birthday > b.birthday) {
					return -1;
				  }
				  if (a.birthday < b.birthday) {
					return 1;
				  }
				  return 0;
			}
		},
	},
	name: {
		up: {
			fn: (a, b) => {
				if (a.name > b.name) {
					return 1;
				  }
				  if (a.name < b.name) {
					return -1;
				  }
				  return 0;
			}
		},
		down: {
			fn: (a, b) => {
				if (a.name > b.name) {
					return -1;
				  }
				  if (a.name < b.name) {
					return 1;
				  }
				  return 0;
			}
		},
	}
}

class Table extends Component {
	state = {
		currentSort: 'up',
		currentRow: 'name',
		filter: ''
	};
    
	onSortChange = (currentRow) => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'up') nextSort = 'down';
		else if (currentSort === 'down') nextSort = 'up';

		this.setState({
			currentSort: nextSort,
			currentRow: currentRow
		});
	};

	render() {
		
		const { data } = this.props;
		const { currentSort } = this.state;
		const {currentRow} = this.state;
		return (
			data.length > 0 && (
				<>
				<div className="btns">
					<button className="btns-button" onClick={() => this.onSortChange('birthday')}>
						Cортировка по возрасту
					</button>
					<button className="btns-button" onClick={() => this.onSortChange('name')}>
						Cортировка по имени
					</button>
				</div>
					
				<table className="table">
					<thead className="table-head">
						<tr className="table-head__row">
							<th className="table-head__row-cell">Дата рождения</th>
							<th className="table-head__row-cell">Имя</th>
							<th className="table-head__row-cell">Никнейм</th>
							<th className="table-head__row-cell">Почта</th>
							<th className="table-head__row-cell">Телефон</th>
							<th className="table-head__row-cell">Сайт</th>
						</tr>
					</thead>
					<tbody>
						{[...data].sort(sortOptions[currentRow][currentSort].fn).map(user => (
							<tr className="table-row" key = {user.id}>
								<td className="table-row__cell">{user.birthday}</td>
								<td className="table-row__cell">{user.name}</td>
								<td className="table-row__cell">{user.username}</td>
								<td className="table-row__cell">{user.email}</td>
								<td className="table-row__cell">{user.phone}</td>
								<td className="table-row__cell">{user.website}</td>
							</tr>
						))}
					</tbody>
				</table>
				</>
				
			)
		);
	}
}

export default Table;