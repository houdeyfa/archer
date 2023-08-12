import { useState, useEffect } from "react";
import { Button , Text, View} from 'react-native';

import {
  HashRouter as Router,
  Route,
  NavLink,
  Routes,
  Link,
  useParams,
  useHistory
} from "react-router-dom";

function ArchersList() {

  let [archers, setArchers] = useState([]);

  useEffect(() => {
    getArchers();
  }, [])

  let getArchers = async () => {
        let response = await fetch('http://138.68.191.27:8080/api/report/');
        let data = await response.json();
        setArchers(data)
  }
  let archers_lady_sjw = archers.filter((a)=>{if(a.gender=='Lady' && a.round == 'Short Junior Windsor'){return a}})
  let archers_lady_jw = archers.filter((a)=>{if(a.gender=='Lady' && a.round == 'Junior Windsor'){return a}})
  let archers_lady_sw = archers.filter((a)=>{if(a.gender=='Lady' && a.round == 'Short Windsor'){return a}})
  let archers_lady_wj = archers.filter((a)=>{if(a.gender=='Lady' && a.round == 'Windsor' && a.age_group != 'Senior'){return a}})
  let archers_lady_w = archers.filter((a)=>{if(a.gender=='Lady' && a.round == 'Windsor' && a.age_group == 'Senior'){return a}})

  let archers_gent_sjw = archers.filter((a)=>{if(a.gender=='Gent' && a.round == 'Short Junior Windsor'){return a}})
  let archers_gent_jw = archers.filter((a)=>{if(a.gender=='Gent' && a.round == 'Junior Windsor'){return a}})
  let archers_gent_sw = archers.filter((a)=>{if(a.gender=='Gent' && a.round == 'Short Windsor'){return a}})
  let archers_gent_wj = archers.filter((a)=>{if(a.gender=='Gent' && a.round == 'Windsor' && a.age_group != 'Senior'){return a}})
  let archers_gent_w = archers.filter((a)=>{if(a.gender=='Gent' && a.round == 'Windsor' && a.age_group == 'Senior'){return a}})


  let sortByScore = (arr) => {
    let array = [...arr]
    array?.sort((a, b) => (a.totalScore > b.totalScore ? -1 : 1))
    return array
  }
  let sortByHit = (arr) => {
    let array = [...arr]
    array?.sort((a, b) => (a.totalHits > b.totalHits ? -1 : 1))
    return array
  }
  let sortByGold = (arr) => {
    let array = [...arr]
    array?.sort((a, b) => (a.totalGold > b.totalGold ? -1 : 1))
    return array
  }

  let getSepBow = (arch) => {
    let archer = [...arch]
    let Barebow = archer.filter((a)=>{if(a.bow=='Barebow'){return a}})
    let Longbow = archer.filter((a)=>{if(a.bow=='Longbow'){return a}})
    let Recurve = archer.filter((a)=>{if(a.bow=='Recurve'){return a}})
    let Compound = archer.filter((a)=>{if(a.bow=='Compound'){return a}})

    Barebow = sortByScore(sortByGold(sortByHit(Barebow)))
    Longbow = sortByScore(sortByGold(sortByHit(Longbow)))
    Recurve = sortByScore(sortByGold(sortByHit(Recurve)))
    Compound = sortByScore(sortByGold(sortByHit(Compound)))

    return [Barebow, Longbow, Recurve, Compound]
  }

  let getBow = (arch) => {
    let archerList = [...arch]
    if (typeof archerList !== 'undefined' && archerList.length === 0) {
       return (<p> </p>)
    }
    return(
    <div>
        <h3> {archerList[0].bow} </h3>
        {archerList.map((archer, index) => (
            <Text style={{fontWeight: 'bold', color: (archer.isEligibleReward == 0) ? 'red' : 'black'}}>{index+1}: {archer.full_name} #Club: {archer.club_name
            } #Score:{archer.totalScore} #Golds:{archer.totalGold} #Hits:{archer.totalHits} {(archer.isEligibleReward == 0) ? '###   NOT ELIGIBLE   ###' : ''} {'\n\n'}
            </Text>
        ))}
    </div>
    );
  }


  function refreshPage() {
    //location.reload(0);
  }




  return (
  <View style={{alignItems:'center'}}>
  <h1> NUNEATON ARCHERS</h1>
  <h1> OPEN WINDSOR </h1>
  <Text style={{textAlign:'center',fontSize:80}}> 2023 </Text>

  <div>

        <div>
          <h2> {(archers_lady_sjw.length !== 0) ? 'Short Junior Windsor Round - Ladies' : ''} </h2>
          {getSepBow(archers_lady_sjw).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_gent_sjw.length !== 0) ? 'Short Junior Windsor Round - Gentlemen' : ''} </h2>
          {getSepBow(archers_gent_sjw).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_lady_jw.length !== 0) ? 'Junior Windsor Round - Ladies' : ''} </h2>
          {getSepBow(archers_lady_jw).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_gent_jw.length !== 0) ? 'Junior Windsor Round - Gentlemen' : ''} </h2>
          {getSepBow(archers_gent_jw).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_lady_sw.length !== 0) ? 'Short Windsor Round - Ladies' : ''} </h2>
          {getSepBow(archers_lady_sw).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_gent_sw.length !== 0) ? 'Short Windsor Round - Gentlemen' : ''} </h2>
          {getSepBow(archers_gent_sw).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_lady_wj.length !== 0) ? 'Windsor Round - Ladies Junior' : ''} </h2>
          {getSepBow(archers_lady_wj).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_gent_wj.length !== 0) ? 'Windsor Round - Gentlemen Junior' : ''} </h2>
          {getSepBow(archers_gent_wj).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_lady_w.length !== 0) ? 'Windsor Round - Ladies' : ''} </h2>
          {getSepBow(archers_lady_w).map((archers, index) => (
               getBow(archers)
          ))}

          <h2> {(archers_gent_w.length !== 0) ? 'Windsor Round - Gentlemen' : ''} </h2>
          {getSepBow(archers_gent_w).map((archers, index) => (
               getBow(archers)
          ))}


        </div>



        <Button title="REFRESH" onPress={() => getArchers()}>
              </Button>


    </div>

    </View>
  );
}

export default ArchersList;
