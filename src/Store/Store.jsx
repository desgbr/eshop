
import { createStore , combineReducers , applyMiddleware} from "redux";
import reducer from './Reducer'
import thunk from 'redux-thunk'

const combine = combineReducers({
    //ريديوسر لو  عندنل كتر من reducer
})

const store = createStore(reducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store