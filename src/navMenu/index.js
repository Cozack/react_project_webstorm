import {
  Link
} from "react-router-dom";
export default function navMenu() {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/counter'}>Counter</Link>
        </div>
    );
}