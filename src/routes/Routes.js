import {
  Switch,
  Route,
} from "react-router-dom";
import {Counter} from "../cmponents/counter/Counter";
import Home from "../cmponents/Home";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/counter'} component={Counter}/>
                <Route path={'/'} component={Home}></Route>
            </Switch>
        </div>
    );
}