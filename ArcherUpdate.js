import { useState, useEffect } from "react";
import { Button , Text} from 'react-native';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Link,
  useParams
} from "react-router-dom";

function ArcherUpdate() {

  let [archers, setArchers] = useState([]);

  useEffect(() => {
    getArchers();
  }, [])

  let getArchers = async () => {
        let response = await fetch('http://138.68.191.27:8080/api/archer/');
        let data = await response.json();
        setArchers(data)
  }
  let sortByTarget = (arr) => {
    let array = [...arr]
    array?.sort((a, b) => (a.target_number > b.target_number ? -1 : 1))
    return array
  }

  let sortedArchers = (arr) => {
    let array = [...arr]
    array?.sort((a, b) => (a.target_number > b.target_number ? -1 : 1))
    return array
  }
  return (
  <div>

            <div>
              {sortByTarget(archers).map((archer, index) => (
                 <NavLink to= {"/update/"+archer.id} style={{color: "black",textDecoration:"none"}}>

                    <Text style={{ fontSize: 20 }}> {archer.full_name} {'\t'}</Text>
                    <Text style={{ fontSize: 20, color: 'blue'}}> target: {archer.target_number} {'\n\n'}</Text>

                 </NavLink>
              ))}

            </div>

        <NavLink to="/admin123" style={{color: "black",textDecoration:"none"}}>
            <Button title="Menu">
              </Button>
        </NavLink>

    </div>
  );
}

export default ArcherUpdate;
