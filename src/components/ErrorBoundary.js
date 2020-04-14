import React, { Component } from 'react'

class ErrorBoundary extends Component {
	constructor(props)	 {
		super(props)
		this.state = {
			hasError: false
		}
	}

	// same to 'try catch block' in JS
	componentDidCatch() {
		this.setState({ hasError: true })
	}

	render() {
		return this.state.hasError ? 
			<h1>Ooooops. That is not good</h1>
			:
			this.props.children
	}
}

export default ErrorBoundary