import {
  Switch,
  Route,
} from "react-router-dom";
import {Counter} from "../components/counter/Counter";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/counter'} component={Counter}/>
            </Switch>
        </div>
    );
}