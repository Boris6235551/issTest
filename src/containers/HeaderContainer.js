import { connect } from 'react-redux'
import Header from '../components/Header/Header'

const mapStateToProps = state => ({
  name: state.session.user
})

export default connect(mapStateToProps)(Header)