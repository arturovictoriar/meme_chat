// Import libraries
import { connect } from 'react-redux'
// Import modules
import AddMessageComponent from '../../components/AddMessage'
import { addMessage } from '../actions'

/**
 * function for connecting the dispatch with the props component
 * @param {Function} dispatch conect props with dispatcher state
 */
const mapDispatchToProps = dispatch => ({
  dispatch: (message, author, date) => {
    dispatch(addMessage(message, author, date))
  }
})
// Updating the new message in the state app for AddMessage component
export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
