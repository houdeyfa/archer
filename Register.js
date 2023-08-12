//import '../App.css';
import { useState, useEffect } from "react";
import { Button , Text, View, StyleSheet, CheckBox} from 'react-native';
import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import {Select} from 'react-dropdown-select';


import {
  Route,
  NavLink,
  Routes,
  Link,
  useParams
} from "react-router-dom";

import SelectDropdown from 'react-native-select-dropdown'


import _get from 'lodash/get';


function Register() {

  let [full_name, setFullName] = useState('');
  let [gender, setGender] = useState('');
  let [age_group, setAgeGroup] = useState('');
  let [bow, setBow] = useState('');
  let [club_name, setClubName] = useState('');
  let [round, setRound] = useState('');
  let [targetNum, setTargetNum] = useState('');
  let [isEligibleReward, setEligibility] = useState(true);
   // Post data
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8', "Accept" : "application/json"},
        body: JSON.stringify({'full_name':full_name,
        'gender':gender,
        'age_group':age_group,
        'bow':bow,
        'club_name':club_name,
        'round':round,
        'isEligibleReward':isEligibleReward,
        'target_number':targetNum,
        }
        ),
    };
  const handleClick = async () => {
     console.log('Put the data');
     let response = await fetch('http://138.68.191.27:8080/api/add_archer/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
     //let data = await response.json();
     console.log(response);

  };


  const bows = [
  { value: 'longbow', label: 'Longbow' },
  { value: 'barebow', label: 'Barebow' },
  { value: 'recurve', label: 'Recurve' },
  { value: 'compound', label: 'Compound' }
]

const ages = [
  { value: 'u12', label: 'U12' },
  { value: 'u14', label: 'U14' },
  { value: 'u16', label: 'U16' },
  { value: 'u18', label: 'U18' },
  { value: 'senior', label: 'Senior' }
]
  const genders = [
  { value: 'lady', label: 'Lady'},
  { value: 'gent', label: 'Gent'}
  ]
  const rounds = [
  { value: 'sjw', label: 'Short Junior Windsor'},
  { value: 'jw', label: 'Junior Windsor'},
  { value: 'sw', label: 'Short Windsor'},
  { value: 'w', label: 'Windsor'}
  ]

  let handleBow = (event) => {
    const value = event[0]['label']
    console.log(value)
    setBow(value)
  }
  let handleGender = (event) => {
    const value = event[0]['label']
    console.log(value)
    setGender(value)
  }
  let handleAge = (event) => {
    const value = event[0]['label']
    console.log(value)
    setAgeGroup(value)
  }
  let handleRound = (event) => {
    const value = event[0]['label']
    console.log(value)
    setRound(value)
  }
  let handleName = (event) => {
    const value = event.target.value;
    console.log(value)
    setFullName(value)
  }
  let handleClub = (event) => {
    const value = event.target.value;
    console.log(value)
    setClubName(value)
  }

  let handleTargetNum = (event) => {
    const value = event.target.value;
    console.log(value)
    setTargetNum(value)
  }

  return (
  <View style={{alignItems:'center'}}>

        <h4>
          Enter name:
          <TextInput
             style={{height: 40, width: 250, textAlign: 'center', backgroundColor: '#e9e9e9',}}
             onChange={e => handleName(e)}
          />
        </h4>

        <h4>
          Select gender:
          <Select options={genders} onChange={handleGender} />
        </h4>
        <h4>
          Select age group:
          <Select options={ages} onChange={handleAge} />
        </h4>
        <h4>
          Select bow:
          <Select options={bows} onChange={handleBow} />
        </h4>
        <h4>
          Enter club:
          <TextInput
             style={{height: 40, width: 250, textAlign: 'center', backgroundColor: '#e9e9e9',}}
             onChange={e => handleClub(e)}
          />
        </h4>
        <h4>
          Select round:
          <Select options={rounds} onChange={handleRound} />
        </h4>

        <h4>
          Enter target number:
          <TextInput
             style={{height: 40, width: 250, textAlign: 'center', backgroundColor: '#e9e9e9',}}
             onChange={e => handleTargetNum(e)}
          />
        </h4>

        <h4>
          Is he eligible for a reward?
        <CheckBox
          value={isEligibleReward}
          onValueChange={setEligibility}
          style={{alignSelf: "center",}}
        />
        </h4>

        <p> {'\n\n'}</p>

        <NavLink to="/admin123" style={{color: "black",textDecoration:"none"}}>
        <Button title="SAVE"
            onPress={() => handleClick()}>
        </Button>
        </NavLink>
    </View>
  );
}

export default Register;
