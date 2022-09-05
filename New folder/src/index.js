import React from "react";
import ReactDOM from "react-dom";
import App from './App.js'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import { Provider } from "react-redux";
// import store from './Store/index'

ReactDOM.render(
<BrowserRouter>
<React.StrictMode>
{/* <Provider store={store}> */}
<App/>
{/* </Provider> */}
</React.StrictMode>
</BrowserRouter>

 , document.getElementById("root"));