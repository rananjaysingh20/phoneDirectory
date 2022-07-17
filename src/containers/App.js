import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import {people} from '../contacts'

class App extends Component {
	constructor() {
		super()
		this.state = {
			people: people,
			searchfield: ''
		}
	}

	// componentDidMount () {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users => this.setState({ robots: users}))
	// }
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}
	render() {
		const {people, searchfield} = this.state;
		const filteredPeople = people.filter(people => {
			return people.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !people.length ?
		<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>Contacts</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList people={filteredPeople}/>
				</Scroll>
			</div>
		);
	}
}

export default App;