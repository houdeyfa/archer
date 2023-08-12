//import '../App.css';
import { useState, useEffect, useRef } from "react";
import { Button , Text, View, StyleSheet} from 'react-native';
import React from "react";
import { SafeAreaView, TextInput } from "react-native";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Link,
  useParams
} from "react-router-dom";

import _get from 'lodash/get';


function ScoreSheet() {

  const archerParams = useParams();
  let [archer, setArcher] = useState([]);
  const refs = React.useRef([])
  let [arrows, setArrows] = useState(Array.from({length: 3},()=> Array.from({length: 6}, () => Array.from({length: 6}, () => null))));

  useEffect(() => {
    getArcher();
    getArrows();

  }, [])
  let getArcher = async () => {
        let response = await fetch('http://138.68.191.27:8080/api/archer_unique/'+archerParams.id+ '/');
        let data = await response.json();
        setArcher(data)
  }

  let getArrows = async () => {
        let response = await fetch('http://138.68.191.27:8080/api/archer/'+archerParams.id+'/arrows/');
        let data = await response.json();
        setArrows(data)
  }


  const [matrix, setMatrix] = useState(Array.from({length: 3},()=> Array.from({length: 6}, () => Array.from({length: 6}, () => null))));
  let handleChange = (distance, end, arrow, event) => {
    let copy = [...arrows];
    copy[distance][end][arrow] = +event.target.value;
    setArrows(copy);

  };

  let countGoldDistance = (arr) => {
    let array = [...arr]
    let sumGold = 0;
    for (let i = 0; i < 6; i++){
        sumGold += array[i].filter(x => x==9).length;
    }
    //console.log('Golds: '+sumGold);
    return sumGold;
  }

  let countGoldTotal = (arr) => {
    let array = [...arr]
    let sumGold = 0;
    for (let i = 0; i < 3; i++){
        sumGold += countGoldDistance(array[i])
    }
    //console.log('Golds Total: '+sumGold);
    return sumGold;
  }

  let countHitsDistance = (arr) => {
    let array = [...arr]
    let sumHits= 0;
    for (let i = 0; i < 6; i++){
        sumHits += array[i].filter(x => [1,2,3,4,5,6,7,8,9].includes(x) ).length;
    }
    return sumHits;
  }
  let countHitsTotal = (arr) => {
    let array = [...arr]
    let sumHitsTotal= 0;
    for (let i = 0; i < 3; i++){
        sumHitsTotal += countHitsDistance(array[i]);
    }
    return sumHitsTotal;
  }


  let countScoreEnd = (arr) => {
    let org_arr = [...arr]
    let array = (org_arr)
    let scoreEnd = 0;
    for(let i = 0; i < 6; i++){
        if (array[i] != '')
            scoreEnd += array[i];
    }
    //let score = array.reduce((a,b) => a+b);
    return scoreEnd;
  }

  let countScoreDistance = (arr) => {
    let array = [...arr]
    let scoreDistance = 0;
    for(let i = 0; i < 6; i++){
        scoreDistance += countScoreEnd(array[i]);
    }
    return scoreDistance;
  }

  let countScoreTotal = (arr) => {
    let array = [...arr]
    let scoreTotal = 0;
    for(let i = 0; i < 3; i++){
        scoreTotal += countScoreDistance(array[i]);
    }
    return scoreTotal;
  }

  let zeroToBlank = (arrow) => {
    if( arrow == 0)
        return ''
    return arrow
  }

  let press_ok = (index_distance, index_end, index_arrow) => {
    console.log((index_distance+1)*100 + index_end*10 + index_arrow)
  }


  // Post data
  const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8', "Accept" : "application/json"},
        body: JSON.stringify({'score_sheet':arrows,
        'total' : countScoreTotal(arrows),
        'hits' : countHitsTotal(arrows),
        'golds' : countGoldTotal(arrows)
        }
        ),
    };
  const handleClick = async () => {
     //console.log(arrows);
     //console.log('Put the data');
     let response = await fetch('http://138.68.191.27:8080/api/archer/'+archerParams.id+'/updatescore/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
     //let data = await response.json();
     //console.log(response);

  };
  const getref = (ref) => {
    return ref
  }
  const itemEls = useRef(new Array())

  const ref_input2 = useRef();

  return (
  <View style={{alignItems:'center'}}>
        <h3 align='left'> Score for {archer.full_name}</h3>


          {arrows.map((distances, index_distance) => (
              <View style={{textAlign: ''}}>
                  <View style={{flexDirection: "row"}}>
                        <h4> DISTANCE {index_distance+1} </h4>
                        <TextInput
                            style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#a9e9e9', borderWidth: 3, marginLeft: 166}}
                            value = 'S'
                        />
                        <TextInput
                            style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#a9e9e9', borderWidth: 3}}
                            value = 'H'
                        />
                        <TextInput
                            style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#a9e9e9', borderWidth: 3}}
                            value = 'G'
                        />
                  </View>
              {distances.map((distance, index_end) => (
                    <View style={{flexDirection: "row"}}>
                    <p style={{height: 20, width: 20, textAlign: 'center'}}> E{index_end+1} </p>
                    {distance.map((arrow, index_arrow) => (
                      <View style={{flexDirection: "row"}}>
                        <TextInput
                            id = {index_distance * 36 + index_end * 6 + index_arrow}
                            style={{height: 50, width: 40, textAlign: 'center', borderColor: '#999999', borderWidth: 3}}
                            placeholder={arrow}
                            maxLength={1}

                            onChange={e => handleChange(index_distance, index_end, index_arrow, e)}
                            ref={(element) => itemEls.current.push(element)}
                            onSubmitEditing={() => itemEls.current[index_distance * 36 + index_end * 6 + index_arrow +1].focus()}

                        />

                      </View>
                     ))}


                    <TextInput
                        style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3}}
                        value = {countScoreEnd(arrows[index_distance][index_end])}
                    />
                    <TextInput
                        style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3}}
                        value = { arrows[index_distance][index_end].filter(x => x!=0 && x!='').length }
                    />
                    <TextInput
                        style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3}}
                        value = { arrows[index_distance][index_end].filter(x => x==9).length }
                    />
                   </View>
                )
               )
              }
                  <View style={{flexDirection: "row"}}>
                      <TextInput
                                style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3, marginLeft: 260}}
                                value = { countScoreDistance(arrows[index_distance]) }
                      />
                      <TextInput
                                style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3,}}
                                value = { countHitsDistance(arrows[index_distance]) }
                      />
                      <TextInput
                                style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3,}}
                                value = { countGoldDistance(arrows[index_distance]) }
                      />
                  </View>
                    <p> {'\n\n\n\n\n'} </p>
                  <View style={[{flexDirection: "row" }]}>

                    <Button title="SAVE"
                        onPress={() => handleClick()}>
                    </Button>

                    <NavLink to="/archers" style={{color: "black",textDecoration:"none", marginLeft: 100}}>
                    <Button title="SAVE AND BACK"
                        onPress={() => handleClick()}>
                    </Button>
                    </NavLink>

                    <NavLink to="/archers" style={{color: "black",textDecoration:"none", marginLeft: 100}}>
                        <Button title="BACK" style={{ height: 500 , }}>
                    </Button>

                    </NavLink>


                  </View>

                  <View>
                      <p> {'\n\n\n\n\n'} </p>
                      <p> {'\n\n\n\n\n'} </p>
                  </View>




              </View>
          ))}
          <View style={{flexDirection: "row"}}>
                      <TextInput
                                style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3, marginLeft: 260}}
                                value = { countScoreTotal(arrows) }
                      />
                      <TextInput
                                style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3,}}
                                value = { countHitsTotal(arrows) }
                      />
                      <TextInput
                                style={{height: 50, width: 40, textAlign: 'center', backgroundColor: '#e9e9e9', borderWidth: 3,}}
                                value = { countGoldTotal(arrows) }
                      />
                  </View>





    </View>
  );
}

export default ScoreSheet;
