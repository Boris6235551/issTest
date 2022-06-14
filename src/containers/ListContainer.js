import { connect } from 'react-redux'
import List from '../components/List/List'
import { display } from '../actions/Actions'
import { sortById } from '../actions/Actions'
import { sortByHeader } from '../actions/Actions'

const mapDispatchToProps = dispatch => ({
    display: (data, key) => { dispatch(display(data, key)) },
    sortById: (data, stateSortById) => { dispatch(sortById(data, stateSortById)) },
    sortByHeader: (data, stateSortByHeader) => { dispatch(sortByHeader(data, stateSortByHeader)) },
})


const mapStateToProps = state => ({
    data: state.session.data,
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
