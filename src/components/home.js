import React,{useState, useEffect} from 'react';
import Searchcomponent from '../components/search'
import axios from 'axios';
import {css} from '@emotion/core';

const Home = () => {
    const [states, setStates] = useState([]);
    const [globaldata, setglobaldata] = useState([]);
    const [search,setsearch] =  useState(null);

   useEffect(() => {
    getStates();
   },[search]);

    const getStates = async () => {
        try {
          const [
            {data: statesDailyResponse},
            {data: zonesResponse},
          ] = await Promise.all([
            axios.get('https://api.covid19india.org/states_daily.json'),
            axios.get('https://api.covid19india.org/zones.json'),
          ]);
    
          const [
            {data},
            {data: stateDistrictWiseResponse},
            {data: stateTestData},
          ] = await Promise.all([
            axios.get('https://api.covid19india.org/data.json'),
            axios.get('https://api.covid19india.org/state_district_wise.json'),
            axios.get('https://api.covid19india.org/state_test_data.json'),
          ]);
    
          setStates(data.statewise);
        } catch (err) {
          console.log(err);
        }
    };

    const handelletters = (e) => {
        const leeters = e.target.value;
        console.log(leeters);
        if(leeters.length === 0){
            setStates(globaldata);
        }
    }


    const displayingTabelbody = () => {
        return states.map((item,i)=>{
            return(
                <div key={i} style={{display:"flex"}}>
                  <span>{item.state}</span>
                  <span>{item.active}</span>
                  <span>{item.confirmed}</span>
                  <span>{item.recovered}</span>
                  <span>{item.deaths}</span>
                </div>
            )
        })
    }


   const handelsearch = async(e) => {
        e.preventDefault();
        const input = e.target.elements.search.value;
        if(input.length === 0) {
            console.log("Hi")
            setStates(states);
        }
        const [
            {data: statesDailyResponse},
            {data: zonesResponse},
          ] = await Promise.all([
            axios.get('https://api.covid19india.org/states_daily.json'),
            axios.get('https://api.covid19india.org/zones.json'),
          ]);
    
          const [
            {data},
            {data: stateDistrictWiseResponse},
            {data: stateTestData},
          ] = await Promise.all([
            axios.get('https://api.covid19india.org/data.json'),
            axios.get('https://api.covid19india.org/state_district_wise.json'),
            axios.get('https://api.covid19india.org/state_test_data.json'),
          ]);
          setglobaldata(data.statewise);
          const filtered = data.statewise.filter((item)=>{
            return item.state === input;
        })
        setStates(filtered);
    }



    return (
        console.log(states),
        <div style={{textAlign:"center", marginTop:"3%"}}>
           <Searchcomponent search={handelsearch} change={handelletters}/>
           <br/>
         <div css={tabelhead}>
          <span>States</span> 
          <span>Active</span> 
          <span>Conformed</span> 
          <span>Recovered</span> 
          <span>Deaths</span> 
        </div>

        <div css={tabelbody}>
         { states.length === 0 ? "No data to display" :  displayingTabelbody()}
        </div>
        </div>
    );
};

export default Home;


const tabelhead = css`
display:flex;
flex:1;
border: 1px solid #eee;
span{
    border-right: 1px solid #eee;
    flex: 1;
    box-shadow: 2px 0px 2px 3px rgba(0,0,0,0.02);
    padding:12px;
    background: cadetblue;
    color: white;
    font-size: 18px;
}
`


const tabelbody = css`
span{
    flex: 1;
    border-right:1px solid #eee;
    text-align: center;
    border:1px solid #eee;
    padding: 8px;
}`