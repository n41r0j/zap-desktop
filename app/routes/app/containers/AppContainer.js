import { connect } from 'react-redux'
import App from '../components/App'
import { fetchTicker, setCurrency } from '../../../reducers/ticker'
import { fetchBalance } from '../../../reducers/balance'
import { fetchInfo } from '../../../reducers/info'
import { fetchPeers } from '../../../reducers/peers'
import { setForm } from '../../../reducers/form'
import { createInvoice } from '../../../reducers/invoice'
import { setAmount, setMessage, setPubkey } from '../../../reducers/form'

const mapDispatchToProps = {
	fetchTicker,
	setCurrency,
	fetchBalance,
	fetchInfo,
	fetchPeers,
	setAmount,
	setMessage,
	setPubkey,
	setForm,
	createInvoice
}

const mapStateToProps = (state) => ({
	ticker: state.ticker,
	balance: state.balance,
	payment: state.payment,
	peers: state.peers,
	form: state.form
})

export default connect(mapStateToProps, mapDispatchToProps)(App)