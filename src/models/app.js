export default {
	namespace: 'app',
	state: {
		locationPathname: '',
		locationQuery: {},
		name: 'testasadsa'
	},
	subscriptions: {
		setupHistory({dispatch, history}) {
			history.listen(location => {
				dispatch({
					type: 'updateState',
					payload: {
						locationPathname: location.pathname,
						locationQuery: location.query
					}
				})
			})
		}
	},
	reducers: {
		updateState(state, {payload}) {
			return {
				...state,
				...payload
			}
		}
	},
	effects: {
		*fetch({type, payload}, {put, call, select}) {}
	}
}
