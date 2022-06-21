import { connect } from 'react-redux'
import { logIn } from '../actions/Actions'
import { deleteErrorMessage } from '../actions/Actions'
import Login from '../components/Login/Login'

const mapStateToProps = state => ({
    errorMsg: state.session.errorMsg,
    errorType: state.session.errorType,
})

const mapDispatchToProps = dispatch => ({
    logIn: (params, cb) => { dispatch(logIn(params, cb)) },
    deleteErrorMessage: () => { dispatch(deleteErrorMessage()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
