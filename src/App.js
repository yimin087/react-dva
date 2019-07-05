import React from 'react'
import {connect} from 'dva'

function App(props) {
	const {name} = props.app
	console.log(props.loading)
	return <div className="App">{name}</div>
}

export default connect(({app, loading}) => ({app, loading}))(App)
