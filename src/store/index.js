import { createStore, compose, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import authmiddleware from './middlewares/authentification';
import shootingmiddleware from './middlewares/shooting';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(authmiddleware, shootingmiddleware)// all middlewares of folder middlewares
);

const persistConfig = {
    key: 'root',
    storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(pReducer, enhancers);

let persistor = persistStore(store);

const exportedObject = {
    store,
    persistor,
};

export default exportedObject;
