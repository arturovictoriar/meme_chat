// Import libraries
import { connect } from 'react-redux'
// Import modules
import AddMessageComponent from '../../components/AddMessage'
import { addMessage, searchVideo, youtubeMode, getVideos } from '../actions'

/**
 * function for connecting the dispatch with the props component
 * @param {Function} dispatch conect props with dispatcher state
 */
const mapDispatchToProps = dispatch => ({
  dispatch_message: (message, author, date) => {
    dispatch(addMessage(message, author, date))
  },
  dispatch_search: (memeSearch) => {
    dispatch(searchVideo(memeSearch))
  },
  dispatch_mode: (status) => {
    dispatch(youtubeMode(status))
  },
  dispatch_get: (videos) => {
    dispatch(getVideos(videos))
  }
})
// Updating the new message in the state app for AddMessage component
export const AddMessage = connect(state => ({
  status: state.videos.status,
  memeSearch: state.videos.memeSearch,
  videos: state.videos.videos
}), mapDispatchToProps)(AddMessageComponent)
