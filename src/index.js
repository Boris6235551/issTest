import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './css/index.css'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
registerServiceWorker()
