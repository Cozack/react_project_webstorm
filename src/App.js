import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/reducerCounter/ReducerCounter";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from "./routes/Routes";
import NavMenu from './navMenu'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes/>
                    <NavMenu/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;