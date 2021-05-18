import {
  Link
} from "react-router-dom";
export default function NavMenu() {
    return (
        <div>
            <Link to={'/counter'}>Counter</Link>
        </div>
    );
}