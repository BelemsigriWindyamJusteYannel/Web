import List from './List';
import './List.css';
import { Link} from "react-router-dom";

export default function Home (){
    const high_side=[]
    high_side.push(
        <div className="first_div_child">
            <h1>Authentification</h1>
            <button><Link to="/Add">Ajouter</Link></button>
        </div>
    )
    return(
        <div>
            {high_side}
            <List/>
        </div>
    )
}