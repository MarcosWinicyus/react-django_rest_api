import {combineReducers} from 'redux'
import leads from './leads'
import errors from './errors.js'
import messages from './messages'
import auth from './auth'


export default combineReducers({
    leads,
    errors,
    messages,
    auth
});