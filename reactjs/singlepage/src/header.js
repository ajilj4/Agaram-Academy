// import App from "./App";
// import Members from "./member";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <nav>
          <ul>
            <li>
              <Link to={`/list`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/member`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
    )
    
}