import {createStore, combineReducers, applyMiddleware} from "redux";
import GalleryReducer from './reducers/galleryReducer'
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
        gallery: GalleryReducer
})






export const store = createStore(reducers, applyMiddleware(thunkMiddleware))