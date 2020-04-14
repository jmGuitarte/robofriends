import React, {Component} from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import 'tachyons'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	searchField = (event) => {
		this.setState({ searchField: event.target.value})
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(response => {
				this.setState({
					robots: response
				})
			})
	}

	render() {
		const { robots, searchField } = this.state
		const filterRobots = robots.filter(robot => {
			// if name includes what is in the searchfield, return robot.name
			// returns true if searchField is empty ''
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return !robots.length ? 
			<h1>Loading...</h1>
			:
			(
				<div className='tc'>
					<h1 className='f1 '>RoboFriends</h1>
					<SearchBox searchChange={this.searchField} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			)
	}
}

export default App