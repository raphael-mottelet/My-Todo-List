import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { TodoListReducer, TodoDetailsReducer} from './reducers/TodoReducers'

const reducer = combineReducers({
    TodoList: TodoListReducer,
    TodoDetails: TodoDetailsReducer,
});

const middleware = [thunk]

const store= legacy_createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store