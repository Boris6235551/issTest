import { connect } from 'react-redux'
import List from '../components/List/List'
import { display, sortById, sortByHeader, search } from '../actions/Actions'

const mapDispatchToProps = dispatch => ({
    display: (data, key) => { dispatch(display(data, key)) },
    sortById: (data, stateSortById) => { dispatch(sortById(data, stateSortById)) },
    sortByHeader: (data, stateSortByHeader) => { dispatch(sortByHeader(data, stateSortByHeader)) },
    onFind: (name) => { dispatch({ type: 'FIND', payload: name }) }
})


const mapStateToProps = state => ({
    data: state.session.data.filter((element) => element.body.includes(state.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
